    let body = document.body;
    let formDiv = document.querySelector('.form-div');
    let form = document.querySelector('form');
    let table = document.querySelector('table');
    let tableRows = document.querySelectorAll('tr');
    let tableHead = document.querySelector('th');
    let tableData = document.querySelectorAll('td');
    let input = document.querySelectorAll('input');
    let inputObj = Object.values('input');
    let button = document.querySelector('button');
    let redirectText = document.querySelector('h2')
    let password = document.getElementById('pass');
    let confirmPassword = document.getElementById('pass2');
    let submitBtn = document.getElementById('submit')

    
    // for (let i = 0; i < input.length; i++){
    //     input[i].addEventListener('change', formhandler)
    // }

    // function formhandler(event){
    //    const {name,value} = event.target;
    //    const object = {
    //         FirstName: value,
    //         lastname: value,
            
    //    }

    //    console.log(object);
    // }

    form.addEventListener('submit', callbackFunction);

    function callbackFunction(event) {
        // event.preventDefault();
        const myFormData = new FormData(event.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => {
            (formDataObj[key] = value);
            // console.log(key);
            // console.log(value);
        });
        console.log(formDataObj);
        redirect(formDataObj);
    };

    confirmPassword.addEventListener('keyup', passwordCheck)

    function passwordCheck(event){
        console.log(event.target);
        setTimeout(() => {
            if (password.value !== event.target.value){
                sub
            }
        }, 3000)
    }
    function redirect(formDataObj){
        // console.log(`Welcome ${formDataObj.FirstName} ${formDataObj.LastName}`)
        alert(`Welcome ${formDataObj.FirstName} ${formDataObj.LastName}`);  
    }

    button.addEventListener('click', redirect)
   
    

    // let User = function(firstname, lastname, age, email, password){
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    //     this.age = age;
    //     this.email = email;
    //     this.password = password;
    // }

    // const raddie = new User(`${}`)














    // OBJECT DESTRUCTURING!!!

    // let test = {
    //     x: 'name',
    //     y: 'school'
    // }
    
    // let {x,y} = test;
    // console.log(x);
    // console.log(y);

    // COMPUTED KEYS!!!!

    // let id = 'First Name'
    // let test2 = {
    //     [id]: 'Abdulkareem',
    // }
    // console.log(test2);