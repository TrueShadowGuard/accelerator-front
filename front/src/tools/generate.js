const {generateTemplateFilesBatch} = require('generate-template-files');

const config = require('../../package.json');

const args = process.argv.slice(2);
console.log(args);

const [type, ...params] = args;

switch (type) {
    case "component":
        generateComponent(params[0]);
        break;
    default:
        console.error("Unknown type " + type);
        process.exit();
        break;
}

function generateComponent(name) {
    generateTemplateFilesBatch([
        {
            option: 'Create React Component',
            defaultCase: '(pascalCase)',
            entry: {
                folderPath: './src/tools/templates/component',
            },
            dynamicReplacers: [{slot: '__name__', slotValue: name}],
            output: {
                path: './src/components/' + name.toLowerCase(),
                pathAndFileNameDefaultCase: '(PascalCase)',
            },
            onComplete: (results) => {
                console.log(`results`, results);
            },
        },
    ]);
}
