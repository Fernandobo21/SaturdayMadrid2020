function doOnSave(executionContext)
{
    console.log("Begin of OnSave");
    var formContext = executionContext.getFormContext();
    var value = formContext.getAttribute("firstname").getValue();
    formContext.getAttribute("firstname").setValue(value + " --> doOnSave()");
    sum(_formContext, "fbg_onsave");
    console.log("End of OnSave");
}
function doOnChange(executionContext)
{
    console.log("Begin of OnChange");
    var formContext = executionContext.getFormContext();
    var value = formContext.getAttribute("lastname").getValue();
    formContext.getAttribute("lastname").setValue(value + " --> doOnChange()");
    sum(_formContext, "fbg_onchange");
    console.log("End of OnChange");
}
function sum(formContext, field)
{
    var value = formContext.getAttribute(field).getValue();
    formContext.getAttribute(field).setValue(value + 1);
}