 // Visitor counter fetching Lambda function linked to DynamoDB table in AWS
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://d4wiyizuvqweou2mhkatkvmqny0rrctm.lambda-url.us-west-2.on.aws/")
    let data = await response.json();
    counter.innerHTML = 'Views: ${data}';
}

updateCounter();