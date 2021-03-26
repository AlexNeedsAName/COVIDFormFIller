const BLOCKED = "https://sso.mtu.edu/cas/canvas.html";
const SYMPTOM_FORM = "https://www.banweb.mtu.edu/owassb/symptom_form.p_form";
const FILLED_FORM = "https://www.banweb.mtu.edu/owassb/symptom_form.p_submit?symptoms=NONE&contact_with=N";
const REDIRECTED_FORM = "https://www.banweb.mtu.edu/owassb/symptom_form.p_submit"
const CANVAS = "https://mtu.instructure.com";

console.log("COVID Form Redirector loaded.");
console.log("window.location.herf is " + window.location.href);
switch (window.location.href) {
    case BLOCKED:
        console.log("Looks like canvas has been blocked. Redirecting.");
        location.replace(FILLED_FORM);
        break;
    case SYMPTOM_FORM:
        console.log("Page is a the COVID Form, redirecting.");
        location.replace(FILLED_FORM);
        break;
    case REDIRECTED_FORM:
        console.log("Login process discarded query string. Redirecting.");
        location.replace(FILLED_FORM);
        break;
    case FILLED_FORM:
        console.log("Form submitted sucessfully. Redirecting to Canvas");
        location.replace(CANVAS);
        break;
    default:
        console.log("URL did not match something we care about.");
        break;
}

