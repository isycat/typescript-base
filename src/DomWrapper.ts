
export class DomWrapper {
    content: HTMLElement;

    protected constructor(tag: string, content?: string) {
        this.content = document.createElement(tag);
        if (content) {
            this.content.innerHTML = content;
        }
    }

    public addText(text: string): DomWrapper {
        this.content.appendChild(document.createTextNode(text));
        return this;
    }

    public attr(key: string, value: string): this {
        this.content.setAttribute(key, value);
        return this;
    }

    public style(key: string, value: string): this {
        this.content.style.setProperty(key, value);
        return this;
    }

    public addClass(clazz: string): this {
        if (!this.content.className) {
            this.content.className = clazz;
        } else {
            this.content.className = this.content.className + " " + clazz;
        }
        return this;
    }

    public addListener(type: string, listener: () => void): this {
        this.content.addEventListener(type, listener);
        return this;
    }

    public clear(): this {
        while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
        }
        return this;
    }

    public appendTo<T extends Node | DomWrapper>(ele: T): this {
        if (ele instanceof DomWrapper) {
            ((<DomWrapper> ele).content).appendChild(this.content);
        } else {
            (<Node> ele).appendChild(this.content);
        }
        return this;
    }

    public append<T extends Node | DomWrapper>(ele: T): this {
        if (ele instanceof DomWrapper) {
            this.content.appendChild((<DomWrapper> ele).content);
        } else {
            this.content.appendChild(<Node> ele);
        }
        return this;
    }

    public static of(tag: string, content?: string): DomWrapper {
        return new DomWrapper(tag, content);
    }
}

