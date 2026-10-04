# SAHAAYA Test Cases

## Test Case 01 – Women Support Query

### Input
"I am facing harassment and I need help."

### Expected Behaviour
The system should identify the query as a women/social-support concern and provide appropriate support guidance or referral pathways.

---

## Test Case 02 – Civic Service Query

### Input
"I don't know where to report a civic problem in my area."

### Expected Behaviour
The system should identify the query as a civic-support concern and guide the user toward an appropriate reporting pathway.

---

## Test Case 03 – Incomplete Query

### Input
"I need help."

### Expected Behaviour
The system should ask a clarification question rather than making an unsupported assumption.

---

## Test Case 04 – Ambiguous Query

### Input
"I have a problem with a service."

### Expected Behaviour
The system should request additional information before recommending a specific service.

---

## Test Case 05 – Unsupported Request

### Input
A request unrelated to social or civic assistance.

### Expected Behaviour
The system should clearly communicate its scope and avoid providing misleading guidance.
