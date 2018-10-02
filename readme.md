# jest-date-serializer

A custom serializer for jest that strips timezone offsets away from dates before serializing them. This will prevent failing snapshot tests when running them on machines with different timezone.

## Installation
1. Run `yarn add --dev jest-date-serializer` to add the serializer to your project
2. Add the serializer to your [jest configuration](https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string).

Example configuration:
```json
{
"name": "my-awesome-project",
"devDependencies": {
  "jest": "^23.6.0",
  "jest-date-serializer": "^0.0.1"
},
"jest": {
    "snapshotSerializers": [
      "jest-date-serializer"
    ]
  },
}
```

3. All your dates will be stripped of timezone offsets 👯‍♀️
