const generateMessage = () => {
    const sentence1 = ["a bad", "a good", "a great", "an inspirational", "an interesting", "a fabulous", "a terrible"];
    const sentence2 = ["meet new", "offend some", "make friends with new", "forget about some"];
    const sentence3 = ["find a new goal in life", "eat a lot of food", "play football", "lose your personal item"];

    let phrase1 = sentence1[Math.floor(Math.random()*sentence1.length)];
    let phrase2 = sentence2[Math.floor(Math.random()*sentence2.length)];
    let phrase3 = sentence3[Math.floor(Math.random()*sentence3.length)];

    let finalMessage = (`Tomorrow, you will have ${phrase1} day. You will ${phrase2} people and you will ${phrase3}. Enjoy tomorrow and have fun!`);
    return finalMessage;
}

console.log(generateMessage());