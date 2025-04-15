"use client"

import mqtt from "mqtt"

// MQTT connection options
const options = {
  clientId: `smart_water_${Math.random().toString(16).slice(2, 8)}`,
  clean: true,
  reconnectPeriod: 5000,
  connectTimeout: 30 * 1000,
}

// Connect to MQTT broker
export const connectMqtt = (brokerUrl: string) => {
  try {
    const client = mqtt.connect(brokerUrl, options)

    client.on("connect", () => {
      console.log("Connected to MQTT broker")
    })

    client.on("error", (err) => {
      console.error("MQTT connection error:", err)
    })

    client.on("reconnect", () => {
      console.log("Reconnecting to MQTT broker...")
    })

    return client
  } catch (error) {
    console.error("Failed to connect to MQTT broker:", error)
    return null
  }
}

// Subscribe to topics
export const subscribeToTopics = (client: mqtt.MqttClient, topics: string[]) => {
  if (!client) return

  topics.forEach((topic) => {
    client.subscribe(topic, (err) => {
      if (err) {
        console.error(`Error subscribing to ${topic}:`, err)
      } else {
        console.log(`Subscribed to ${topic}`)
      }
    })
  })
}

// Publish message to topic
export const publishMessage = (client: mqtt.MqttClient, topic: string, message: string) => {
  if (!client) return

  client.publish(topic, message, { qos: 1 }, (err) => {
    if (err) {
      console.error(`Error publishing to ${topic}:`, err)
    }
  })
}
