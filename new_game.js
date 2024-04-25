var things = {
    "Animals": ["Platybelodon","Lion", "Elephant","Mammoth", "Tiger","Stegodon",  "Zebra", "Rhino", "Kangaroo", "Dolphin", "Cheetah", "Gorilla"],
    "Birds": ["Eagle", "Parrot", "Owl", "Peacock","Hummingbird", "Hawk", "Sparrow", "Swan", "Penguin", "Flamingo"],
    "Insects": ["Ant", "Butterfly", "Bee", "Spider","Dragonflies","Beetle", "Mosquito", "Grasshopper", "Ladybug", "Caterpillar"]
};

var hints = {
    "Lion": ["Prowling the savanna, this majestic creature with a flowing mane commands respect with its presence alone.", "Its roar reverberates across the vast plains, a declaration of dominance and authority.", "With keen senses finely tuned for the hunt, it stalks its prey with silent determination, its powerful jaws ready to deliver the final blow.", "Despite its solitary nature, it forms bonds within its pride, a complex social structure built on trust and cooperation.", "Defending its territory with ferocity, it stands as a guardian of its realm, ready to face any challenger.", "Living in family units, it exhibits intricate behaviors and rituals, a testament to its intelligence and adaptability.", "Embedded in the folklore of civilizations past and present, it embodies both fear and reverence, a symbol of courage and nobility.", "Threatened by habitat loss and human conflict, it faces an uncertain future in a rapidly changing world.", "Conservation efforts endeavor to safeguard this iconic creature and preserve its legacy for generations to come."],
    "Elephant": ["With its massive size and impressive tusks, this creature commands attention wherever it goes.", "Known for its intricate social bonds, individuals of this species form tight-knit family groups that care for each other throughout their lives.", "The trunk of this animal serves as a versatile tool for feeding, drinking, and communication.", "Despite their size, members of this species display surprising grace and agility, capable of traversing diverse landscapes with ease.", "Found in a range of habitats, from dense forests to open grasslands, this species adapts to various environments with remarkable versatility.", "Individuals of this species are revered in cultures around the world, symbolizing wisdom, strength, and resilience.", "Threatened by habitat loss and human-wildlife conflict, members of this species struggle to maintain their way of life in an ever-changing world.", "Conservation efforts are vital to protect these iconic species and ensure their survival for future generations.", "Through education and awareness, we can foster appreciation and respect for members of this species and their vital role in ecosystems.", "By working together, we can make a difference in the conservation of these animals and the preservation of their habitats."],
    "Tiger": ["Roaming the jungle, this majestic creature with striking patterns traverses its territory with stealth and power.", "Its vocalizations echo through the dense foliage, a warning to those who dare encroach upon its domain.", "With sharp senses honed by evolution, it tracks its prey with precision, its claws and teeth ready to strike.", "Despite its solitary nature, it leaves its mark on the landscape, a silent declaration of ownership.", "Adapted to various habitats, from dense forests to open plains, it navigates each terrain with ease.", "Its movements are a blur of speed and agility, a testament to its prowess as a hunter.", "Revered in myths and legends, it embodies both fear and admiration, a symbol of strength and mystery.", "Threatened by human encroachment and exploitation, it fights a silent battle for survival in a changing world.", "Conservation efforts strive to protect this enigmatic creature and secure its place in the wild for generations to come."],
    "Zebra": ["Conservation efforts aim to protect these iconic animals and their natural habitats from threats such as habitat loss and poaching", "They are herbivores, primarily feeding on grasses and occasionally shrubs and leaves", "Their unique stripe patterns are as individual as fingerprints, with no two having identical markings", "During migration, they travel long distances in search of food and water", "Despite their seemingly docile appearance, they can be surprisingly aggressive when threatened", "They have excellent eyesight and hearing, allowing them to detect predators from a distance", "Herds are led by a dominant stallion, with females and their young following closely behind", "Their stripes serve as a form of camouflage, making it difficult for predators to single out individuals", "They inhabit grasslands and savannas, often found grazing in herds", "Known for their distinctive black and white stripes, these creatures are easily recognizable"],
    "Rhino": ["With its massive size and thick, armored skin, this creature is one of the largest land mammals.", "Characterized by its distinctive horn(s), which are made of keratin, the same material as human hair and nails.", "Found primarily in grasslands and savannas, these animals are well-adapted to their habitat.", "Despite their bulky appearance, they can reach speeds of up to 30 miles per hour when charging.", "They have a keen sense of smell and hearing, allowing them to detect predators and locate food sources.", "They are herbivores, primarily feeding on grasses, leaves, and shoots.", "Known for their solitary nature, although some species may form loose groupings.", "Play a crucial role in their ecosystem as seed dispersers, helping to maintain biodiversity.", "Due to habitat loss and poaching for their horns, they are classified as endangered species.", "Conservation efforts aim to protect these iconic animals from extinction."],
    "Eagle": ["By working together, we can make a difference in safeguarding the future of these magnificent creatures.", "Through education and awareness, we can promote the conservation of these birds and their habitats.", "Conservation efforts are essential to protect these iconic birds and ensure their continued existence for future generations.", "Threatened by habitat loss and human activities such as poaching and pollution, they face challenges to their survival.", "They are revered in many cultures around the world, symbolizing power, courage, and vision.", "Found in diverse habitats, from mountains to plains, they adapt to various environments with ease.", "Despite their predatory nature, they also play a crucial role in maintaining ecological balance as apex predators.", "Featuring sharp beaks and strong claws, these birds are skilled hunters, preying on a variety of small animals.", "Known for its impressive wingspan and aerial prowess, it is a symbol of freedom and strength.", "With its keen eyesight and powerful talons, this majestic bird commands the skies, soaring high above its domain."],
    "Parrot": ["By working together, we can ensure the long-term survival of these fascinating creatures.", "Through education and awareness, we can promote responsible pet ownership and support conservation initiatives.", "Conservation efforts are crucial to protect these charismatic birds and their habitats.", "Threatened by habitat destruction and illegal pet trade, they face challenges to their survival in the wild.", "They are celebrated in cultures for their connection to human emotions and their role as companions.", "Found in tropical and subtropical regions around the world, they thrive in diverse ecosystems such as forests and savannas.", "Despite their small size, they exhibit complex social behaviors, forming strong bonds with their flock members.", "Featuring strong beaks and dexterous feet, these birds use their tools for cracking nuts, preening feathers, and climbing trees.", "Known for its ability to mimic human speech and sounds, it is one of the most vocal birds in the avian world.", "With its vibrant plumage and charming personality, this colorful bird captures the hearts of many with its beauty and intelligence."],
    "Owl": ["By working together, we can make a difference in safeguarding the future of these elusive creatures.", "Through education and awareness, we can promote the conservation of these birds and their habitats.", "Conservation efforts are essential to protect these enigmatic birds and ensure their continued existence.", "Threatened by habitat loss and human activities such as deforestation and pesticide use, they face challenges to their survival.", "They are steeped in folklore and mythology, often associated with wisdom, mystery, and magic.", "Found in various habitats, from forests to grasslands, they adapt to nocturnal life with specialized adaptations such as large eyes and sensitive ears.", "Despite their solitary nature, they play a vital role in controlling rodent populations, helping to maintain ecological balance.", "Featuring sharp talons and a hooked beak, these birds are efficient predators, capable of capturing their prey with ease.", "Known for its keen hearing and excellent vision, it hunts small mammals and rodents under the cover of darkness.", "With its silent flight and piercing gaze, this nocturnal bird of prey is a master of the night, patrolling the darkness with stealth and precision."],
    "Peacock": ["By working together, we can ensure the long-term survival of these majestic creatures.", "Through education and awareness, we can promote responsible tourism and support conservation initiatives.", "Conservation efforts are crucial to protect these iconic birds and their habitats.", "Threatened by habitat destruction and illegal poaching for their feathers, they face challenges to their survival in the wild.", "They are revered in many cultures for their association with royalty and divinity, symbolizing grace and opulence.", "Found in forests and grasslands of South Asia, they thrive in diverse habitats ranging from dense jungles to open meadows.", "Despite their showy appearance, they are adept flyers and spend much of their time foraging for food in the wild.", "Featuring long, colorful tail feathers called 'train', these birds use their displays to attract mates and establish dominance.", "Known for its elaborate courtship dance and vibrant colors, it is a symbol of love, romance, and fertility.", "With its iridescent plumage and extravagant display, this magnificent bird captivates onlookers with its beauty and elegance."],
    "Hummingbird":["By working together, we can ensure the continued presence of these delightful creatures for future generations.", "Through education and awareness, we can promote sustainable gardening practices and support habitat restoration initiatives.", "Conservation efforts are essential to protect these beloved birds and their habitats.", "Threatened by habitat loss and pesticide use, they face challenges to their survival in an increasingly urbanized world.", "They are celebrated in cultures around the world for their connection to springtime and renewal, symbolizing hope and happiness.", "Found in a variety of habitats, from lush forests to urban gardens, they adapt to human-altered landscapes with ease.", "Despite their small size, they play a vital role in pollinating plants and maintaining biodiversity in ecosystems.", "Featuring delicate beaks and agile wings, these birds flit gracefully through the air, darting from flower to flower in search of nectar.", "Known for its intricate nest-building skills and playful behavior, it embodies the spirit of creativity and joy.", "With its melodious songs and vibrant plumage, this charming bird enchants all who encounter it."],
    "Ant":["By working together, we can make a difference in safeguarding the future of these fascinating creatures.", "Through education and awareness, we can promote sustainable practices and minimize human impacts on ant populations.", "Conservation efforts are essential to protect these ecologically important insects and their habitats.", "Threatened by habitat destruction and invasive species, they face challenges to their survival in a rapidly changing world.", "Ants are revered in many cultures for their perseverance, cooperation, and resilience in the face of adversity.", "Found in almost every terrestrial habitat on Earth, from deserts to rainforests, they adapt to a wide range of environmental conditions.", "Despite their small size, they play a crucial role in ecosystems as scavengers, predators, and seed dispersers.", "Featuring powerful mandibles and strong exoskeletons, ants are efficient foragers and defenders of their nests.", "Known for their ability to communicate through chemical signals and work together as a unified force, they demonstrate remarkable teamwork.", "With their industrious nature and complex social structure, these tiny insects work tirelessly to build and maintain their colonies."],
    "Butterfly":["By working together, we can ensure the conservation of these enchanting creatures for generations to come.", "Through education and awareness, we can promote butterfly-friendly gardening practices and habitat restoration initiatives.", "Conservation efforts are crucial to protect these iconic insects and their habitats.", "Threatened by habitat loss, climate change, and pollution, they face challenges to their survival in an increasingly human-dominated world.", "They are celebrated in art, literature, and folklore for their beauty and symbolism, representing freedom, love, and the soul.", "Found in diverse habitats, from meadows to tropical rainforests, they adapt to changes in temperature, humidity, and vegetation.", "Despite their fragile appearance, they are skilled fliers, capable of navigating vast distances during seasonal migrations.", "Featuring long proboscises and specialized mouthparts, butterflies sip nectar from flowers and play a vital role in pollination.", "Known for their incredible metamorphosis from caterpillar to butterfly, they symbolize transformation and renewal.", "With their dazzling array of colors and delicate wings, these graceful insects inspire wonder and awe in observers of all ages."],
    "Bee":["By working together, we can ensure the continued health and abundance of bee populations for future generations.", "Through education and awareness, we can promote bee-friendly gardening practices and reduce pesticide use in agricultural areas.", "Conservation efforts are essential to protect these invaluable pollinators and their habitats.", "Threatened by habitat loss, pesticide use, and diseases such as colony collapse disorder, they face challenges to their survival.", "Bees are revered in many cultures for their role in sustaining life on Earth, symbolizing industry, community, and harmony with nature.", "Found in diverse habitats, from urban gardens to wildflower meadows, they adapt to changes in landscape and forage preferences.", "Despite their small size, they play a crucial role in agriculture, pollinating a wide variety of crops that humans rely on for food.", "Featuring hairy bodies and specialized mouthparts, bees collect pollen and nectar from flowers to feed themselves and their colonies.", "Known for their intricate dances and communication methods, they share information about food sources and nesting sites with their hive mates.", "With their buzzing wings and diligent work ethic, these industrious insects are essential pollinators in ecosystems around the world."],
    "Spider":["By working together, we can ensure the continued presence of spiders and their contributions to ecosystems worldwide.", "Through education and awareness, we can dispel myths and misconceptions about spiders and promote coexistence with these beneficial creatures.", "Conservation efforts are crucial to protect these ecologically important arachnids and their habitats.", "Threatened by habitat loss, pesticide use, and climate change, they face challenges to their survival in an increasingly human-altered world.", "Spiders are woven into the fabric of human culture, appearing in myths, legends, and literature as symbols of creativity, patience, and cunning.", "Found in almost every terrestrial habitat on Earth, from deserts to rainforests, they adapt to a wide range of environmental conditions.", "Despite their reputation as solitary hunters, some spiders exhibit communal behaviors, sharing webs or living in colonies.", "Featuring specialized silk glands and spinnerets, spiders create silk threads for building webs, sheltering eggs, and capturing prey.", "Known for their diverse hunting strategies and venomous bites, they are both feared and admired for their predatory skills.", "With their eight legs and silk-spinning abilities, these arachnids are masters of precision and patience, weaving intricate webs to capture prey."],
    "Dragonflies":["Known for their incredible speed and precision in flight, they are formidable hunters of flying insects such as mosquitoes and flies.", "Featuring large compound eyes and strong mandibles, they are efficient predators, capable of snatching their prey mid-air with lightning-fast reflexes.", "Despite their carnivorous diet, they also play a role in controlling pest populations and maintaining ecosystem balance.", "Found near freshwater habitats such as rivers, lakes, and wetlands, they are indicators of water quality and habitat health.", "They are steeped in symbolism and mythology, representing concepts such as change, transformation, and adaptability across cultures.", "Threatened by habitat loss, pollution, and climate change, they face challenges to their survival in an increasingly urbanized world.", "Conservation efforts are crucial to protect these beautiful insects and their freshwater habitats.", "Through education and awareness, we can promote the importance of these insects in aquatic ecosystems and inspire conservation action.", "By working together, we can ensure the continued presence of these aerial acrobats for future generations."]
};

var challenges = [
"Dance to a song chosen by the group, blindfolded.",
"Call a random number and sing 'Happy Birthday' to the person who answers.",
"Text your ex and tell them you still have feelings for them.",
"Share the most embarrassing moment you've had in public.",
"Speak in an accent of your choice for the next three rounds.",
"Let someone else give you a makeover using only items from the kitchen.",
"Sing your favorite song loudly in the middle of a crowded area.",
"Do your best impression of a famous celebrity.",
"Go outside and do the chicken dance for one minute.",
"If you could switch lives with anyone for a day, who would it be and why?",
"Put on a blindfold and let someone feed you a mystery food.",
"Text your crush and confess your feelings for them.",
"Do a handstand against the wall for as long as you can.",
"Perform a dramatic monologue about your favorite food.",
"Go to the nearest store and ask for directions to a fictional place.",
"Dance to a song chosen by the group, while holding a conversation with a nearby stranger.",
"Text the fifth contact in your phone and ask them what their favorite ice cream flavor is.",
"Share a story from your childhood that always makes you laugh.",
"Draw a self-portrait blindfolded and show it to the group.",
"Perform a rap about a random object in the room.",
"Create a new dance move and teach it to the group.",
"Reenact a famous movie scene with your own twist.",
"Write and perform a short poem about the last food you ate.",
"Improvise a stand-up comedy routine about your pet (or an imaginary pet).",
"Tell a joke and make everyone laugh.",
"Describe your dream vacation destination in detail.",
"Sing a duet with another player on a song chosen by the group.",
"Show off your best dance move and challenge someone else to do better.",
"Reveal your most embarrassing fashion choice from the past (if applicable).",
"Perform a magic trick with a household item.",
"Share a fun fact about yourself that nobody in the group knows.",
"Create a new handshake with someone in the group and demonstrate it.",
"Challenge someone to a thumb war and declare yourself the champion.",
"Recite a tongue twister three times without making a mistake.",
"Act out a scene from your favorite TV show or movie.",
"Share an interesting historical fact that you recently learned.",
"Describe your favorite food using only emojis.",
"Perform a dramatic reading of a text message conversation between you and a friend.",
"Share a photo from your camera roll and explain the story behind it.",
"Challenge someone to a staring contest and try to make them laugh.",
"Tell a short ghost story or urban legend.",
"Perform an interpretive dance based on a random word chosen by the group.",
"Create a new nickname for yourself and ask everyone to address you by it for the rest of the game.",
"Describe your dream job (real or imaginary) in detail.",
"Share a piece of advice that you wish you had received when you were younger.",
"Write and perform a short commercial for a product of your choice.",
"Challenge someone to a game of rock-paper-scissors and the loser has to do a dare chosen by the group.",
"Recite the alphabet backward as fast as you can.",
"Share a quote that inspires you and explain why it's meaningful to you.",
"Draw a caricature of someone in the group and have them guess who it is.",
"Perform a silly dance and invite everyone to join in.",
"Tell a funny story about a misunderstanding you had with someone.",
"Share a skill or talent that you have and demonstrate it for the group.",
"Challenge someone to a round of charades and act out a movie title chosen by the group.",
"Share a goal or aspiration that you have for the future.",
"Create a new handshake with someone in the group and demonstrate it.",
"Challenge someone to a thumb war and declare yourself the champion.",
"Recite a tongue twister three times without making a mistake.",
"Act out a scene from your favorite TV show or movie.",
"Share an interesting historical fact that you recently learned.",
"Describe your favorite food using only emojis.",
"Perform a dramatic reading of a text message conversation between you and a friend.",
"Share a photo from your camera roll and explain the story behind it.",
"Challenge someone to a staring contest and try to make them laugh.",
"Tell a short ghost story or urban legend.",
"Perform an interpretive dance based on a random word chosen by the group.",
"Create a new nickname for yourself and ask everyone to address you by it for the rest of the game.",
"Describe your dream job (real or imaginary) in detail.",
"Share a piece of advice that you wish you had received when you were younger.",
"Write and perform a short commercial for a product of your choice.",
"Challenge someone to a game of rock-paper-scissors and the loser has to do a dare chosen by the group.",
"Recite the alphabet backward as fast as you can.",
"Share a quote that inspires you and explain why it's meaningful to you.",
"Draw a caricature of someone in the group and have them guess who it is.",
"Perform a silly dance and invite everyone to join in.",
"Tell a funny story about a misunderstanding you had with someone.",
"Share a skill or talent that you have and demonstrate it for the group.",
"Challenge someone to a round of charades and act out a movie title chosen by the group.",
"Share a goal or aspiration that you have for the future."
];

var selectedHints = [], selectedChallenges = []; // Remove selectedHints and selectedChallenges from global scope
var hintIndices = {}; // Object to store the current hint index for each thing

document.getElementById('hint-button').addEventListener('click', function() {
    showHint();
});

document.getElementById('next-hint-button').addEventListener('click', function() {
    showNextHint();
});

document.getElementById('new-game-button').addEventListener('click', function() {
    resetGame();
});

document.getElementById('game-over').style.display = 'none'; // Hide game over message initially
document.getElementById('new-game-button').style.display = 'none'; // Hide new game button initially

function showHint() {
    var hintElement = document.getElementById('hint');
    randomCategory = getRandomCategory();
    randomThing = getRandomThing(randomCategory);
    
    // Initialize the hint index for the current thing if not already set
    if (!(randomThing in hintIndices)) {
        hintIndices[randomThing] = 0;
    }
    
    var hintIndex = hintIndices[randomThing]; // Get the current hint index
    var hintsForThing = hints[randomThing]; // Get the hints for the current thing
    var hint = hintsForThing[hintIndex]; // Get the hint at the current index
    
    // Increment the hint index for the next hint
    hintIndices[randomThing]++;
    
    // Check if all hints have been displayed, if so, reset the index
    if (hintIndices[randomThing] >= hintsForThing.length) {
        hintIndices[randomThing] = 0;
    }
    
    // Display the hint
    if (!selectedHints.includes(hint)) {
        selectedHints.push(hint);
        hintElement.innerHTML += '<p>' + hint + '</p>';
    }
    
    // Show options
    var optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ""; // Clear previous options
    var options = things[randomCategory];
    options.forEach(function(option) {
        var button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function() {
            checkAnswer(option, randomThing);
        });
        optionsContainer.appendChild(button);
    });

    // Disable hint button after showing hint
    document.getElementById('hint-button').disabled = true;

    // Show challenge button
    document.getElementById('challenge-button').style.display = 'inline-block';
}

function showNextHint() {
    var hintElement = document.getElementById('hint');
    var hintsForThing = hints[randomThing]; // Get the hints for the current thing
    var hintIndex = hintIndices[randomThing]; // Get the current hint index
    var hint = hintsForThing[hintIndex]; // Get the hint at the current index
    
    // Increment the hint index for the next hint
    hintIndices[randomThing]++;
    
    // Check if all hints have been displayed, if so, reset the index
    if (hintIndices[randomThing] >= hintsForThing.length) {
        hintIndices[randomThing] = 0;
    }
    
    // Display the hint
    if (!selectedHints.includes(hint)) {
        selectedHints.push(hint);
        hintElement.innerHTML += '<p>' + hint + '</p>';
    }
}

function resetGame() {
    selectedHints = [];
    selectedChallenges = [];
    document.getElementById('hint').innerHTML = '';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('new-game-button').style.display = 'none';
    document.getElementById('hint-button').disabled = false;
    showHint();
}

function getRandomCategory() {
    var categories = Object.keys(things);
    return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomThing(category) {
    var thingsInCategory = things[category];
    return thingsInCategory[Math.floor(Math.random() * thingsInCategory.length)];
}

function getRandomChallenge() {
    var challenge = challenges[Math.floor(Math.random() * challenges.length)];
    if (!selectedChallenges.includes(challenge)) {
        selectedChallenges.push(challenge);
        return challenge;
    } else {
        return getRandomChallenge(); // Try again if the challenge is already selected
    }
}

function checkAnswer(selectedOption, correctThing) {
    if (selectedOption === correctThing) {
        // Correct answer
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('options').innerHTML = ""; // Clear options
        document.getElementById('challenge-button').style.display = 'none'; // Hide challenge button
        document.getElementById('new-game-button').style.display = 'block'; // Show new game button
    } else {
        // Incorrect answer
        var challenge = getRandomChallenge();
        document.getElementById('challenge').textContent = challenge;
        document.getElementById('challenge-container').style.display = 'block';
        document.getElementById('next-hint-button').disabled = false; // Enable next hint button
        
        var tryAgainMessage = document.getElementById('try-again-message');
        tryAgainMessage.textContent = "Try Again!";
        tryAgainMessage.style.display = 'block'; // Display the "Try Again" message
    

        // Hide "Try Again" message after 2 seconds (2000 milliseconds)
        setTimeout(function() {
            tryAgainMessage.style.display = 'none'; // Hide the "Try Again" message
        }, 2000);
    }
}

