
function fun1() {
    let rtl = document.getElementById('rtl').value;
    let ttl = document.getElementById('ttl');

    let rtr = document.getElementById('rtr').value;
    let ttr = document.getElementById('ttr');

    let rbr = document.getElementById('rbr').value;
    let tbr = document.getElementById('tbr');

    let rbl = document.getElementById('rbl').value;
    let tbl = document.getElementById('tbl');

    let block = document.getElementById('block')

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderTopLeftRadius = ttl.value + 'px';
    block.style.borderTopRightRadius = ttr.value + 'px';
    block.style.borderBottomRightRadius = tbr.value + 'px';
    block.style.borderBottomLeftRadius = tbl.value + 'px';
}