const fetchAPI = async () => {
    const url = '<API_ENDPOINT>';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      // Process the data as needed
      return data;
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
      return null;
    }
  };

  const submitAPI = async (formData) => {
    const url = '<API_ENDPOINT>';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error submitting data');
      }
      const data = await response.json();
      // Process the data as needed
      return data;
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
      return null;
    }
  };

  export { fetchAPI, submitAPI };

/*const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};*/