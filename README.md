## DynamoDB Setup

Follow [instructions in DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables.tutorial.html) to setup database table, partition key, and replica.

```bash
aws dynamodb get-item \
  --table-name Music \
  --key '{"Artist":{"S":"item_1"},"SongTitle":{"S":"Song Value 1"}}' \
  --return-consumed-capacity TOTAL
```

## Local Development

Run Express server locally.

```bash
npm i
npm start
```

Run Express server locally with Edgio CLI.

```bash
edg dev
```