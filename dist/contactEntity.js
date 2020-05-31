var ContactMainForm = (function () {
    function ContactMainForm() {
    }
    ContactMainForm.prototype.doOnSave = function (executionContext) {
        console.log("Begin of OnSave");
        var _formContext = executionContext.getFormContext();
        var value = _formContext.getAttribute("firstname").getValue();
        _formContext.getAttribute("firstname").setValue(value + " --> doOnSave()");
        this.sum(_formContext, "fbg_onsave");
        console.log("End of OnSave");
    };
    ContactMainForm.prototype.doOnChange = function (executionContext) {
        console.log("Begin of OnChange");
        var _formContext = executionContext.getFormContext();
        var value = _formContext.getAttribute("lastname").getValue();
        _formContext.getAttribute("lastname").setValue(value + " --> doOnChange()");
        this.sum(_formContext, "fbg_onchange");
        console.log("End of OnChange");
    };
    ContactMainForm.prototype.sum = function (_formContext, field) {
        var value = _formContext.getAttribute(field).getValue();
        _formContext.getAttribute(field).setValue(value++);
    };
    return ContactMainForm;
}());
