require("colors");
const fs = require("fs");
const templates = require("./templates");
const componentName = process.argv[2];

if (!componentName) {
    console.error("Please provide a valid module name".red);
    process.exit(1);
}

console.log("Going to create a component template with name:" + componentName);

const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${componentName} already exists.`.red);
    process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
    fs.writeFileSync(
        `${componentDirectory}/${template.fileName}`,
        template.content
    );
});

console.log(
    "Successfully created component under:" + componentDirectory.green
);