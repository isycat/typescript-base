import {DomWrapper} from "./DomWrapper";

export class Container extends DomWrapper {
    public constructor(content?: string) {
        super("div", content);
        this.addClass("container");
    }
}
