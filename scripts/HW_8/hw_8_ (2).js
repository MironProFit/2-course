function isPositive(number) {

    return number > 0;
    }

    function isMale(person) {

    return person.gender === 'male';
    }
    
    function filter(arr, ruleFunction) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (ruleFunction(arr[i])) {
                result.push(arr[i]);
            }
        }

        return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));