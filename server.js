import { createServer } from "node:http";
import {
  FunctionDeclarationSchemaType,
  GoogleGenerativeAI,
} from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const hostname = "127.0.0.1";
const port = 3001;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  // Set the `responseMimeType` to output JSON
  // Pass the schema object to the `responseSchema` field
  generationConfig: {
    responseMimeType: "application/json",
    //   responseSchema: {
    //     type: FunctionDeclarationSchemaType.ARRAY,
    //     items: {
    //       type: FunctionDeclarationSchemaType.OBJECT,
    //       properties: {
    //         song_name: {
    //           type: FunctionDeclarationSchemaType.STRING,
    //         },
    //       },
    //     },
  },
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function run() {
  const prompt =
    "Remove Heading plz:" +
    JSON.stringify({
      counters: {
        u_row: 6,
        u_column: 6,
        u_content_text: 9,
        u_content_image: 2,
        u_content_button: 1,
        u_content_social: 1,
      },
      body: {
        id: "4Sr2OlGr_u",
        rows: [
          {
            id: "x9K8LmNp",
            cells: [1],
            columns: [
              {
                id: "7yT8LmKz",
                contents: [
                  {
                    id: "j4P9FmOv",
                    type: "heading",
                    values: {
                      containerPadding: "20px",
                      fontFamily: {
                        label: "Cabin",
                        value: "'Cabin', sans-serif",
                      },
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#000000",
                      textAlign: "center",
                      lineHeight: "180%",
                      text: "<h1>Billie Eilish Announces New Album!</h1>",
                      _meta: {
                        htmlID: "u_content_heading_1",
                        htmlClassNames: "u_content_heading",
                      },
                      selectable: true,
                      draggable: true,
                      duplicatable: true,
                      deletable: true,
                      hideable: true,
                    },
                  },
                  {
                    id: "a5P1LmKp",
                    type: "text",
                    values: {
                      containerPadding: "20px",
                      fontFamily: {
                        label: "Cabin",
                        value: "'Cabin', sans-serif",
                      },
                      fontSize: "18px",
                      color: "#000000",
                      textAlign: "center",
                      lineHeight: "150%",
                      text: "<p>We are thrilled to announce the release of Billie Eilish's new album! Stay tuned for more details and exclusive updates. Don't miss out on behind-the-scenes content and special offers by subscribing to our newsletter. Follow Billie on her journey and experience the music like never before!</p>",
                      _meta: {
                        htmlID: "u_content_text_1",
                        htmlClassNames: "u_content_text",
                      },
                      selectable: true,
                      draggable: true,
                      duplicatable: true,
                      deletable: true,
                      hideable: true,
                    },
                  },
                  {
                    id: "u5P8LmKv",
                    type: "button",
                    values: {
                      containerPadding: "20px",
                      anchor: "",
                      href: {
                        name: "web",
                        values: {
                          href: "https://www.billieeilish.com",
                          target: "_blank",
                        },
                      },
                      buttonColors: {
                        color: "#FFFFFF",
                        backgroundColor: "#000000",
                        hoverColor: "#000000",
                        hoverBackgroundColor: "#FFFFFF",
                      },
                      size: {
                        autoWidth: true,
                      },
                      fontFamily: {
                        label: "Cabin",
                        value: "'Cabin', sans-serif",
                      },
                      fontWeight: 700,
                      fontSize: "18px",
                      textAlign: "center",
                      lineHeight: "140%",
                      padding: "15px 30px",
                      borderRadius: "5px",
                      text: "Learn More",
                      _meta: {
                        htmlID: "u_content_button_1",
                        htmlClassNames: "u_content_button",
                      },
                      selectable: true,
                      draggable: true,
                      duplicatable: true,
                      deletable: true,
                      hideable: true,
                    },
                  },
                  {
                    id: "newContentSocial",
                    type: "social",
                    values: {
                      icons: {
                        iconType: "circle-black",
                        items: [
                          {
                            url: "https://www.instagram.com/billieeilish",
                            name: "instagram",
                          },
                          {
                            url: "https://twitter.com/billieeilish",
                            name: "twitter",
                          },
                          {
                            url: "https://www.youtube.com/billieeilish",
                            name: "youtube",
                          },
                          {
                            url: "https://www.facebook.com/billieeilish",
                            name: "facebook",
                          },
                        ],
                      },
                      containerPadding: "20px",
                      _meta: {
                        htmlID: "u_content_social_1",
                        htmlClassNames: "u_content_social",
                      },
                      selectable: true,
                      draggable: true,
                      duplicatable: true,
                      deletable: true,
                      hideable: true,
                    },
                  },
                ],
                values: {
                  backgroundColor: "",
                  padding: "0px",
                  border: {},
                  borderRadius: "0px",
                  _meta: {
                    htmlID: "u_column_1",
                    htmlClassNames: "u_column",
                  },
                },
              },
            ],
            values: {
              displayCondition: null,
              backgroundColor: "#FFFFFF",
              columnsBackgroundColor: "#FFFFFF",
              backgroundImage: {
                url: "",
                fullWidth: true,
                repeat: "no-repeat",
                size: "cover",
                position: "center",
              },
              padding: "30px",
              anchor: "",
              hideDesktop: false,
              _meta: {
                htmlID: "u_row_1",
                htmlClassNames: "u_row",
              },
              selectable: true,
              draggable: true,
              duplicatable: true,
              deletable: true,
              hideable: true,
            },
          },
        ],
        headers: [],
        footers: [],
        values: {
          popupPosition: "center",
          popupWidth: "600px",
          popupHeight: "auto",
          borderRadius: "10px",
          contentAlign: "center",
          contentVerticalAlign: "center",
          contentWidth: "600px",
          fontFamily: {
            label: "Cabin",
            value: "'Cabin',sans-serif",
            url: "https://fonts.googleapis.com/css?family=Cabin:400,700",
            defaultFont: true,
          },
          textColor: "#000000",
          popupBackgroundColor: "#FFFFFF",
          popupBackgroundImage: {
            url: "",
            fullWidth: true,
            repeat: "no-repeat",
            size: "cover",
            position: "center",
          },
          popupOverlay_backgroundColor: "rgba(0, 0, 0, 0.1)",
          popupCloseButton_position: "top-right",
          popupCloseButton_backgroundColor: "#DDDDDD",
          popupCloseButton_iconColor: "#000000",
          popupCloseButton_borderRadius: "0px",
          popupCloseButton_margin: "0px",
          popupCloseButton_action: {
            name: "close_popup",
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          backgroundColor: "#f9f9f9",
          preheaderText: "",
          linkStyle: {
            body: true,
            linkColor: "#0000ee",
            linkHoverColor: "#0000ee",
            linkUnderline: true,
            linkHoverUnderline: true,
          },
          backgroundImage: {
            url: "",
            fullWidth: true,
            repeat: "no-repeat",
            size: "custom",
            position: "top-center",
            customPosition: ["50%", "0%"],
          },
          _meta: {
            htmlID: "u_body",
            htmlClassNames: "u_body",
          },
        },
      },
      schemaVersion: 16,
    });

  const result = await model.generateContentStream(prompt);

  let text = "";
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    console.log(chunkText);
    text += chunkText;
  }

  // const result = await model.generateContent(prompt);
  // const response = result.response;
  // const text = response.text();
  // console.log(text);
}

run().catch((e) => {
  console.error("Something went wrong");
  console.log(e);
  process.exit(1);
});
