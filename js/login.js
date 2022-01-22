class Login
{
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit()
    {
        let self = this;

        this.form.addEventListener("submit", (e) =>{
            e.preventDefault();
            self.fields.forEach((field) => {
                const input = document.querySelector(field);
            }) 
        })
    }
}

const form = document.querySelector(".sign-in-form");
if(form)
{
    const fields = ["username, password"]
    const validator = new Login(form, fields);
}