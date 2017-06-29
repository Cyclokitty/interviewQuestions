// implement .indexOf()

function index(arr, select) {
  return arr.indexOf(select) >= 0 ?  true :  false;
}

index([10, 20, 30, 40, 50], 20);
index(['cat', 'dog', 'hamster', 'bunny'], 'armadillo');
