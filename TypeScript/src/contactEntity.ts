class ContactMainForm {
    public formContext: any;
    public contactConstructor(executionContext: any) {
        this.formContext = executionContext.getFormContext();
        this.doOnLoad();
        this.formContext.data.entity.addOnSave(this.doOnSave);
    }
    public doOnLoad()
    {
        console.log("Begin of OnLoad");
        // var eval:Boolean = true;
        // var test:string = (eval === true) ? "" : 0;
        var att:any = this.formContext.getAttribute("lastname");
        this.formContext.getAttribute("lastname").addOnChange(this.doOnChange(att));
        console.log("OnChange added");

        (this.formContext.getControl("firstname") !== null) ?? this.formContext.getAttribute("firstname").setValue(" --> doOnLoad()");
        console.log("End of OnLoad");
    }
    public doOnSave()
    {
        console.log("Begin of OnSave");
        //this.formContext.ui.setFormNotification("Typescript locked and loaded!", "INFO", "ts-msg");
        (this.formContext.getControl("firstname") !== null) ?? this.formContext.getAttribute("firstname").setValue(" --> doOnSave()");
        console.log("End of OnSave");
    }
    public doOnChange(attribute:any)
    {
        console.log("Begin of OnChange of" + attribute.getName());
        var value:any = attribute.getValue();
        attribute.setValue(value + " --> doOnChange()");
        console.log("End of OnChange of" + attribute.getName());
    }
}