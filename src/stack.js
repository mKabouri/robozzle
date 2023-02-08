// a stack is an object such as s = {"tab": _tab, "last": _last}
export function empty_stack() {
  
    return {'stack': [], 'last': -1};
}


export function stack__is_empty(s) {
    return s.last === -1;
}

export function stack(s, element) {
    s.last++;
    const a = element[0];
    const b = element[1];
    s.stack.push([a,b]);
}

export function unstack(s) {
    s.last--;
    return s.stack.pop();
}


//export {empty_stack, stack__is_empty, stack, unstack};

