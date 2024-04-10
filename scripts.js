document.getElementById('tax-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const grossAnnualIncome = parseFloat(document.getElementById('gross-annual-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value);
    const totalDeductions = parseFloat(document.getElementById('deductions').value);
    const age = document.getElementById('age').value;
  
    if (isNaN(grossAnnualIncome) || isNaN(extraIncome) || isNaN(totalDeductions)) {
      alert('Please enter valid numbers for all inputs.');
      return;
    }
  
    let overallIncome = grossAnnualIncome + extraIncome - totalDeductions;
    let tax = 0;
  
    if (overallIncome > 800000) {
      tax = overallIncome - 800000;
  
      if (age === 'less_than_40') {
        tax *= 0.3;
      } else if (age === 'between_40_and_60') {
        tax *= 0.4;
      } else if (age === 'greater_than_60') {
        tax *= 0.1;
      }
    }
    overallIncome=overallIncome-tax;
  
    // document.getElementById('tax-result').innerText = `Your overall income will be ₹${overallIncome.toLocaleString('en-IN')} after tax deductions, and your tax will be ₹${tax.toLocaleString('en-IN')}.`;
    document.getElementById('tax-result').innerText = `Your overall income will be ₹${overallIncome} after tax deductions, and your tax will be ₹${tax}.`;
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementById('modal-close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  });