class ContactMainForm {
    public doOnSave(executionContext: any)
    {
        console.log("Begin of OnSave");
        const _formContext:any = executionContext.getFormContext();
        const value:any = _formContext.getAttribute("firstname").getValue();
        _formContext.getAttribute("firstname").setValue(value + " --> doOnSave()");
        this.sum(_formContext, "fbg_onsave");
        console.log("End of OnSave");
    }
    public doOnChange(executionContext: any)
    {
        console.log("Begin of OnChange");
        var _formContext:any  = executionContext.getFormContext();
        var value:any = _formContext.getAttribute("lastname").getValue();
        _formContext.getAttribute("lastname").setValue(value + " --> doOnChange()");
        this.sum(_formContext, "fbg_onchange");
        console.log("End of OnChange");
    }
    private sum(_formContext:any, field:string)
    {
        var value:number = _formContext.getAttribute(field).getValue();
        _formContext.getAttribute(field).setValue(value++);
    }
}