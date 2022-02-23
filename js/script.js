document.querySelector("button").addEventListener('click', function(){
  let nameSurname = document.getElementById('name-surname').value;
  console.log(nameSurname);
  let kilometer = document.getElementById('kilometers').value;
  console.log(kilometer);
  document.getElementById('name-passenger').innerHTML = nameSurname;
  let fasciaEta = document.getElementById('my-select').value;
  console.log(fasciaEta);
  let priceKm = 0.27;

  let priceGeneral = kilometer * priceKm;
  let priceMinorenni = priceGeneral - ((priceGeneral * 17) / 100);
  let priceOverSessanta = priceGeneral - ((priceGeneral * 33) / 100);

  /* console.log(fasciaEta == 'Over 60'); */
  if (fasciaEta == 'Over 60') {
    let priceOverSessanta = priceGeneral - ((priceGeneral * 33) / 100);
    console.log(priceOverSessanta);
    document.getElementById('price').innerHTML = priceOverSessanta.toFixed(2) + ' Euro';
  } else if (fasciaEta == 'Maggiorenne') {
      let priceGeneral = kilometer * priceKm;
      console.log(priceGeneral);
      document.getElementById('price').innerHTML = priceGeneral.toFixed(2) + ' Euro';
  } else if (fasciaEta == 'Minorenni') {
      let priceMinorenni = priceGeneral - ((priceGeneral * 17) / 100);
      console.log(priceMinorenni);
  }
});