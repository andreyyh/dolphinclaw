# DolphinClaw Agent Examples

---

# Agent Structure

An agent is just a simple module with a `run()` function.
**DolphinClaw handles the infrastructure.**

Every DolphinClaw agent must export an object with the following fields:

| Field         | Required     | Description                                          |
| ------------- | ------------ | ---------------------------------------------------- |
| `name`        | ✅           | Unique name of the agent                             |
| `description` | ✅           | Short explanation of what the agent does             |
| `setup()`     | ⚠️ optional  | Initialization logic that runs when the agent starts |
| `run()`       | ✅           | Main function executed by the platform               |
| `return`      | ✅           | The result object returned by the agent              |

---

# Minimal Agent Example

```ts
export const agent = {
  name: "example-agent",
  description: "Example DolphinClaw agent",

  async setup() {
    console.log("Agent initialized")
  },

  async run(input = {}) {

    const param = input.topic
	
	if(!param) {
		return {
			success: false, 
			message: "No topic provided."
		}
	}
	
	if(!invoke_claude(param)) { // example
		return {
			success: false, 
			message: "Failed to invoke claude."
		}
	}
	
    return {
      success: true,
      message: `Agent executed for topic: ${topic}`
    }
  }
}
```


---

# Lifecycle

When an agent runs on the DolphinClaw platform, the following lifecycle occurs:

```
Agent loaded
↓
setup() runs
↓
run(input) executes
↓
result is returned
```

* `setup()` runs once when the agent initializes.
* `run()` executes whenever the platform triggers the agent.

---

# Input

Agents can accept parameters via the `input` argument.

Example:

```ts
run({
  topic: "BNB ecosystem"
})
```

Inside the agent:

```ts
const topic = input.topic
```

---

# Output

Agents must return a structured response.

Example:

```ts
return {
  success: true,
  message: "Task completed"
}
```

This response can be logged, stored, or used by other agents on the platform.

---

# Example Agents

This repository includes example agents:

* **Groq Discord Agent**
  Uses an AI model to generate responses and post them to a Discord webhook.

These examples demonstrate how to build real AI agents using external APIs.

---

# Creating Your Own Agent

To create a new agent:

1. Create a new folder inside `examples/`
2. Add a `index.js` file
3. Export an `agent` object
4. Implement the `run()` function
5. Deploy the agent to the dolphinclaw.com

---

# Philosophy

DolphinClaw agents are designed to be:

* simple
* modular
* open-source
* composable

Developers should focus only on the **agent logic**, while the DolphinClaw platform handles execution, scheduling, and infrastructure.
