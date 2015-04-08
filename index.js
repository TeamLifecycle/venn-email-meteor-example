if (Meteor.isServer) {
  vennApiKey = "VENN API KEY HERE"
  toEmailAddress = "TO: EMAIL ADDRESS HERE"
  
  VennEmail.initialize(vennApiKey)
  result = VennEmail.send("from@email.com", toEmailAddress, "How you doin?", "This is a message")
  console.log("email successfully sent with:", result)
}
