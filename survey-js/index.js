//Survey.StylesManager.applyTheme("modern");
Survey.StylesManager.applyTheme("default");

function validatePesel(pesel) {
  let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  let controlNumber = parseInt(pesel.substring(10, 11));

  for (let i = 0; i < weight.length; i++) {
    sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
  }
  sum = sum % 10;
  return (10 - sum) % 10 === controlNumber;
}

function surveyValidateQuestion(s, options) {
  if (options.name.indexOf("pesel") > 0) {
    var pesel = options.value;

    if (!validatePesel(pesel)) {
      options.error = "Niepoprawny PESEL";
    }
  }
}

var surveyJSON = {
  locale: "pl",
  title: "Stwierdzenie nabycia spadku",
  description: "wniosek",
  logo: "http://www.kancelaria-nowakowski.com.pl/images/logo.png",
  logoWidth: 260,
  logoHeight: 55,
  logoPosition: window.innerWidth > 768 ? "right" : "top",
  showProgressBar: "bottom",
  firstPageIsStarted: true,
  pages: [
    {
      "name": "page1",
      "title": "Witamy w sytemie składania wniosków",
      "elements": [
        {
          "type": "html",
          "name": "homePage",
          "html":
            'Tutaj możęmy umieścić dokłądną instrukcję co i jak, która możę być downolnym <b>html-em</b><br/><br/><img src="http://picsum.photos/400/400"/>',
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "paneldynamic",
          name: "applicants",
          title: "Wnioskodawcy",
          templateElements: [
            {
              type: "text",
              name: "applicants.name",
              title: "Imię Nazwisko",
              isRequired: true,
            },
            {
              type: "comment",
              name: "applicants.address",
              title: "Adres zamieszkania",
              isRequired: true,
            },
            {
              type: "text",
              name: "applicants.pesel",
              title: "Pesel",
              isRequired: true,
            },
            {
              type: "dropdown",
              name: "applicants.affinity",
              title: "Powinowactwo",
              isRequired: true,
              choices: [
                {
                  value: "brat",
                  text: "brat",
                },
                {
                  value: "córka",
                  text: "córka",
                },
                {
                  value: "siostra",
                  text: "siostra",
                },
                {
                  value: "matka",
                  text: "matka",
                },
                {
                  value: "mąż",
                  text: "mąż",
                },
                {
                  value: "ojciec",
                  text: "ojciec",
                },
                {
                  value: "syn",
                  text: "syn",
                },
                {
                  value: "żona",
                  text: "żona",
                },
              ],
            },
            {
              type: "text",
              name: "applicants.inheritence",
              title: "Część spadku (%)",
              isRequired: true,
              inputType: "number",
              min: 1,
              max: 100,
              validators: [
                {
                  type: "numeric",
                  minValue: 1,
                  maxValue: 100,
                },
              ],
            },
          ],
          panelCount: 1,
          maxPanelCount: 5,
          panelAddText: "Dodaj wnioskodawcę",
        },
      ],
      title: "Wnioskodawcy",
    },
    {
      name: "page3",
      elements: [
        {
          type: "dropdown",
          name: "court",
          title: "Sąd",
          isRequired: true,
          choices: [
            {
              value: "Kutno (LD1K)",
              text: "Kutno (LD1K)",
            },
            {
              value: "Łask (SR1L)",
              text: "Łask (SR1L)",
            },
            {
              value: "Łęczyca (LD1Y)",
              text: "Łęczyca (LD1Y)",
            },
            {
              value: "Łowicz (LD1O)",
              text: "Łowicz (LD1O)",
            },
            {
              value: "Łódź (LD1M)",
              text: "Łódź (LD1M)",
            },
            {
              value: "Pabianice (LD1P)",
              text: "Pabianice (LD1P)",
            },
            {
              value: "Rawa Mazowiecka (LD1R)",
              text: "Rawa Mazowiecka (LD1R)",
            },
            {
              value: "Skierniewice (LD1H)",
              text: "Skierniewice (LD1H)",
            },
            {
              value: "Zgierz (LD1G)",
              text: "Zgierz (LD1G)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "lawyer",
          title: "Adwokat",
          isRequired: true,
          choices: [
            {
              value: "adw. Elżbieta Cieślińska",
              text: "adw. Elżbieta Cieślińska",
            },
            {
              value: "adw. Piotr Nowakowski",
              text: "adw. Piotr Nowakowski",
            },
            {
              value: "adw. dr Dr Dominika Sujka - Kujawiak",
              text: "adw. dr Dr Dominika Sujka - Kujawiak",
            },
          ],
        },
      ],
      title: "Nagłówek",
    },
    {
      name: "page4",
      elements: [
        {
          type: "paneldynamic",
          name: "participants",
          title: "Uczestnicy",
          templateElements: [
            {
              type: "text",
              name: "participants.name",
              title: "Imię Nazwisko",
              isRequired: true,
            },
            {
              type: "comment",
              name: "participants.address",
              title: "Adres zamieszkania",
              isRequired: true,
            },
            {
              type: "text",
              name: "participants.pesel",
              title: "PESEL",
              isRequired: true,
            },
            {
              type: "dropdown",
              name: "participants.affinity",
              title: "Powinowactwo",
              isRequired: true,
              choices: [
                {
                  value: "brat",
                  text: "brat",
                },
                {
                  value: "córka",
                  text: "córka",
                },
                {
                  value: "siostra",
                  text: "siostra",
                },
                {
                  value: "matka",
                  text: "matka",
                },
                {
                  value: "mąż",
                  text: "mąż",
                },
                {
                  value: "ojciec",
                  text: "ojciec",
                },
                {
                  value: "syn",
                  text: "syn",
                },
                {
                  value: "żona",
                  text: "żona",
                },
              ],
            },
            {
              type: "text",
              name: "participants.inheritence",
              title: "Część spadku (%)",
              isRequired: true,
              inputType: "number",
              min: 1,
              max: 100,
              validators: [
                {
                  type: "numeric",
                  minValue: 1,
                  maxValue: 100,
                },
              ],
            },
          ],
          panelCount: 1,
          maxPanelCount: 5,
          panelAddText: "Dodaj wnioskodawcę",
        },
      ],
      title: "Uczestnicy",
    },
    {
      name: "page5",
      elements: [
        {
          type: "file",
          name: "paymentConfirmation",
          title: "Potwierdzenie wniesienia opłaty sądowej",
          storeDataAsText: false,
          showPreview: false,
          maxSize: 102400,
        },
      ],
      title: "Potwierdzenie wniesienia opłaty sądowej",
      description:
        "W celu dalszego procesowania wniosku prosimy o załączenie skanu dokumentu potwierdzającego wniesienie opłaty sądowej.",
    },
  ],
  // surveyId: '83e2dbb2-b4a6-4631-901a-3d92f91725bf',
  surveyPostId: "2eda972a-072e-469e-9b59-5e85535274d9",
};

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  console.log("sendDataToServer", survey.data);
}

window.survey = new Survey.Model(surveyJSON);

survey
  .onUploadFiles
  .add(function (survey, options) {
    console.log("onUploadFiles", options);
    options
      .files
      .forEach(function (file) {
        var formData = new FormData();
        formData.append("postId", "2eda972a-072e-469e-9b59-5e85535274d9");
        formData.append("file", file);
        $.ajax({
          url: "https://api.surveyjs.io/public/v1/Survey/upload/",
          type: "POST",
          success: function (data) {
            var content = data.replace(
              "dxsfile:",
              "https://api.surveyjs.io/public/v1/Survey/file?filePath=",
            );
            if (data.indexOf("dxsimage:") === 0) {
              content = data.replace(
                "dxsimage:",
                "https://api.surveyjs.io/public/v1/Survey/file?filePath=",
              );
            }
            options.callback("success", [
              {
                file: file,
                content: content,
              },
            ]);
          },
          error: function (error) {},
          async: true,
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          timeout: 60000,
        });
      });
  });

$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer,
  onValidateQuestion: surveyValidateQuestion,
});
