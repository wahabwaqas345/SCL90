

// All factors used in MSC-90
export const factors = [
    "Somatization",
    "Obsessive-Compulsive",
    "Interpersonal Sensitivity",
    "Depression",
    "Anxiety",
    "Hostility",
    "Fear/Avoidance",
    "Paranoia",
    "Psychoticism",
    "Other (Sleep/Diet)"
];

//options
export const options = [
    { value: 0, label: "Never" },
    { value: 1, label: "Mild" },
    { value: 2, label: "Moderate" },
    { value: 3, label: "Heavy" },
    { value: 4, label: "Very Severe" }
];

// 90 questions

export const questions = [
    // Somatization (Q1–Q10)
    { id: 1, factor: "Somatization", text: "Headache." },
    { id: 2, factor: "Somatization", text: "Nervous and uneasy." },
    { id: 3, factor: "Somatization", text: "Unnecessary thoughts or words swirling in the mind." },
    { id: 4, factor: "Somatization", text: "Dizziness and fainting." },
    { id: 5, factor: "Somatization", text: "Decreased interest in the opposite sex." },
    { id: 6, factor: "Somatization", text: "Blame and demand perfection from others." },
    { id: 7, factor: "Somatization", text: "Feeling that others have control over your thoughts." },
    { id: 8, factor: "Somatization", text: "Blame others for the trouble." },
    { id: 9, factor: "Somatization", text: "You forget the things very easily." },
    { id: 10, factor: "Somatization", text: "Worry about whether your clothes are neat and your posture is correct." },



    // Obsessive-Compulsive (Q11–Q20)
    { id: 11, factor: "Obsessive-Compulsive", text: "Easily annoyed and agitated." },
    { id: 12, factor: "Obsessive-Compulsive", text: "Chest pain." },
    { id: 13, factor: "Obsessive-Compulsive", text: "Fear of empty places or streets." },
    { id: 14, factor: "Obsessive-Compulsive", text: "Feeling your energy drop and your activities slow down." },
    { id: 15, factor: "Obsessive-Compulsive", text: "Want to end my life." },
    { id: 16, factor: "Obsessive-Compulsive", text: "Hear voices that others cannot hear." },
    { id: 17, factor: "Obsessive-Compulsive", text: "trembling." },
    { id: 18, factor: "Obsessive-Compulsive", text: "Feeling that most people cannot be trusted." },
    { id: 19, factor: "Obsessive-Compulsive", text: "Poor appetite." },
    { id: 20, factor: "Obsessive-Compulsive", text: "Cry easily." },


    // Interpersonal Sensitivity (Q21–Q30)
    { id: 21, factor: "Interpersonal Sensitivity", text: "Feeling shy and uncomfortable around the opposite sex." },
    { id: 22, factor: "Interpersonal Sensitivity", text: "Feeling cheated, trapped, or like someone is out to get you." },
    { id: 23, factor: "Interpersonal Sensitivity", text: "A sudden feeling of fear for no apparent reason." },
    { id: 24, factor: "Interpersonal Sensitivity", text: "I can't control my temper." },
    { id: 25, factor: "Interpersonal Sensitivity", text: "Afraid of going out alone." },
    { id: 26, factor: "Interpersonal Sensitivity", text: "Often blame yourself." },
    { id: 27, factor: "Interpersonal Sensitivity", text: "Low back pain." },
    { id: 28, factor: "Interpersonal Sensitivity", text: "Finding it difficult to complete tasks." },
    { id: 29, factor: "Interpersonal Sensitivity", text: "Feeling lonely." },
    { id: 30, factor: "Interpersonal Sensitivity", text: "Feeling depressed." },

    // Depression (Q31–Q40)
    { id: 31, factor: "Depression", text: "Excessive worry." },
    { id: 32, factor: "Depression", text: "Not interested in things." },
    { id: 33, factor: "Depression", text: "Feel scared." },
    { id: 34, factor: "Depression", text: "My feelings get hurt easily." },
    { id: 35, factor: "Depression", text: "Others can read your private thoughts." },
    { id: 36, factor: "Depression", text: "Feeling that others don't understand you or sympathize with you." },
    { id: 37, factor: "Depression", text: "Feeling that others don't understand you or sympathize with you." },
    { id: 38, factor: "Depression", text: "Things must be done slowly to ensure they are done correctly." },
    { id: 39, factor: "Depression", text: "My heart is beating very fast." },
    { id: 40, factor: "Depression", text: "Nausea or upset stomach."},




    // Anxiety (Q41–Q50)
    { id: 41, factor: "Anxiety", text: "Feeling inferior to others." },
    { id: 42, factor: "Anxiety", text: "Muscle soreness." },
    { id: 43, factor: "Anxiety", text: "Feeling like someone is watching you or talking about you." },
    { id: 44, factor: "Anxiety", text: "Difficulty falling asleep." },
    { id: 45, factor: "Anxiety", text: "Things must be checked repeatedly." },
    { id: 46, factor: "Anxiety", text: "It's difficult to make a decision." },
    { id: 47, factor: "Anxiety", text: "Fear of riding the tram, bus, subway or train." },
    { id: 48, factor: "Anxiety", text: "Having trouble breathing." },
    { id: 49, factor: "Anxiety", text: "Chills or fever that come and go." },
    { id: 50, factor: "Anxiety", text: "Avoiding certain things, situations, or activities because of fear." },



    //  Hostility, (Q51–Q60)
    { id: 51, factor: "Hostility", text: "My mind went blank." },
    { id: 52, factor: "Hostility", text: "Numbness or tingling in the body." },
    { id: 53, factor: "Hostility", text: "There is a feeling of blockage in the throat." },
    { id: 54, factor: "Hostility", text: "Feeling of having no future and no hope." },
    { id: 55, factor: "Hostility", text: "Unable to concentrate." },
    { id: 56, factor: "Hostility", text: "Feeling weak in a part of the body." },
    { id: 57, factor: "Hostility", text: "Feeling nervous or easily nervous." },
    { id: 58, factor: "Hostility", text: "Feeling of heaviness in the hands or feet." },
    { id: 59, factor: "Hostility", text: "Thinking about death." },
    { id: 60, factor: "Hostility", text: "Eat too much." },


    //   Fear/Avoidance (Q61–Q70)
    { id: 61, factor: "Fear/Avoidance", text: "Feeling uncomfortable when others look at you or talk about you." },
    { id: 62, factor: "Fear/Avoidance", text: "Have thoughts that are not your own." },
    { id: 63, factor: "Fear/Avoidance", text: "An urge to hit or hurt others." },
    { id: 64, factor: "Fear/Avoidance", text: "Wake up too early." },
    { id: 65, factor: "Fear/Avoidance", text: "Having to wash hands, count numbers, or touch certain things repeatedly." },
    { id: 66, factor: "Fear/Avoidance", text: "Sleep is unstable and not deep." },
    { id: 67, factor: "Fear/Avoidance", text: "The urge to break or destroy things." },
    { id: 68, factor: "Fear/Avoidance", text: "Have some thoughts or ideas that others don't have." },
    { id: 69, factor: "Fear/Avoidance", text: "Feeling neurotic towards others." },
    { id: 70, factor: "Fear/Avoidance", text: "Feeling uncomfortable in crowded places such as stores or movie theaters." },



     // Paranoia, (Q71–Q80)
    { id: 71, factor: "Paranoia", text: "Feeling that everything is difficult." },
    { id: 72, factor: "Paranoia", text: "Waves of fear or terror." },
    { id: 73, factor: "Paranoia", text: "Feeling uncomfortable eating in public." },
    { id: 74, factor: "Paranoia", text: "Often argue with others." },
    { id: 75, factor: "Paranoia", text: "My nerves are very tense when I am alone." },
    { id: 76, factor: "Paranoia", text: "Others have not evaluated your achievements appropriately." },
    { id: 77, factor: "Paranoia", text: "Feeling lonely even when with others." },
    { id: 78, factor: "Paranoia", text: "Feeling restless and nervous." },
    { id: 79, factor: "Paranoia", text: "Feeling of being worthless." },
    { id: 80, factor: "Paranoia", text: "Something familiar feels strange or unreal." },




    // Psychoticism (Q81–Q90)
    { id: 81, factor: "Psychoticism", text: "Yelling or throwing things." },
    { id: 82, factor: "Psychoticism", text: "Fear of passing out in public." },
    { id: 83, factor: "Psychoticism", text: "Feeling that others are taking advantage of you." },
    { id: 84, factor: "Psychoticism", text: "I am troubled by some thoughts about sex." },
    { id: 85, factor: "Psychoticism", text: "You believe you should be punished for your mistakes." },
    { id: 86, factor: "Psychoticism", text: "Feeling the urge to get things done quickly." },
    { id: 87, factor: "Psychoticism", text: "Feeling that there is something seriously wrong with your body." },
    { id: 88, factor: "Psychoticism", text: "Never felt close to anyone else." },
    { id: 89, factor: "Psychoticism", text: "Feel guilty." },
    { id: 90, factor: "Psychoticism", text: "I feel like there's something wrong with my brain." },


];