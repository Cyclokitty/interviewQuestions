function assignDeep(obj1, obj2) {

  for (var p in obj2) {
    try {
      // Property in destination object set; update its value.
      if ( obj2[p].constructor == Object ) {
        obj1[p] = assignDeep(obj1[p], obj2[p]);

      } else {
        obj1[p] = obj2[p];

      }

    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];

    }
  }

  return obj1;
}

assignDeep({ a: 1 }, { a: { b: 2 } });
assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 });
