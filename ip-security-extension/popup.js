document.getElementById('checkBtn').addEventListener('click', () => {
    const ip = document.getElementById('ipInput').value.trim();
    const resultDiv = document.getElementById('result');
  
    if (!ip) {
      resultDiv.innerText = 'Please enter an IP address.';
      return;
    }
  
    resultDiv.innerText = 'Checking...';
  
    fetch(`https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}&maxAgeInDays=90`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Key': 'API_KEY' // 🔁 REPLACE WITH YOUR API KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        const d = data.data;
        const score = d.abuseConfidenceScore;
        let scoreClass = '';
        
        if (score <= 10) scoreClass = 'score-green';
        else if (score <= 20) scoreClass = 'score-yellow';
        else if (score <= 70) scoreClass = 'score-orange';
        else scoreClass = 'score-red';

        // Convert timestamp to GMT+3
        const formatDate = (dateString) => {
          if (!dateString) return "None";
          const date = new Date(dateString);
          return date.toLocaleString('en-GB', {
            timeZone: 'Europe/Istanbul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          }).replace(/,/g, '');
        };

        resultDiv.innerHTML =
          `IP: ${d.ipAddress}<br>` +
          `Country: ${d.countryCode}<br>` +
          `Abuse Score: <span class="${scoreClass}">${d.abuseConfidenceScore}/100</span><br>` +
          `Total Reports: ${d.totalReports}<br>` +
          `Last Reported: ${formatDate(d.lastReportedAt)}`;
      })
      .catch(err => {
        resultDiv.innerText = "Error: " + err.message;
      });
  });
  