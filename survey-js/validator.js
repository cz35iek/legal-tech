Survey
    .StylesManager
    .applyTheme("modern");

function MyTextValidator(params) {
    console.log('asd');
    var value = params[0];
    return value.indexOf("survey");
}
// Register the function for use in SurveyJS expressions
Survey
    .FunctionFactory
    .Instance
    .register("MyTextValidator", MyTextValidator);

var json = {
    "questions": [
        {
            "type": "comment",
            "name": "memo",
            "isRequired": true,
            "title": "Type here 'survey' to pass the validation ",
            "validators": [
                {
                    "type": "expression",
                    "text": "You text should contains 'survey' word.",
                    "expression": "MyTextValidator({memo}) >= 0"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyContainer").Survey({model: survey});