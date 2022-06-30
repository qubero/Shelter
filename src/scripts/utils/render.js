import Abstract from "../views/abstract.js";

export const RenderPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
}

export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstChild;
}

export const render = (parent, child, place) => {
    if (parent instanceof Abstract) {
        parent = parent.getElement();
    }

    if (child instanceof Abstract) {
        child = child.getElement();
    }

    switch (place) {
        case RenderPosition.AFTERBEGIN:
            parent.prepend(child);
            break;
        case RenderPosition.BEFOREEND:
            parent.append(child);
            break;
    }
}

export const remove = (component) => {
    if (!(component instanceof Abstract)) {
        throw Err('Can remove only component.')
    }

    component.getElement().remove();
    component.removeElement();
}
