const quizQuestions = [
    {
        id: 1,
        question: "1. I _________ up at 6 o'clock every morning.",
        options: ["wake", "wakes", "am waking", "is waking"],
        answer: 0, // index of "wake"
        explanation: "มีคำว่า 'every morning' (ทุกเช้า) บอกถึงกิจวัตรประจำวัน ต้องใช้ Present Simple ประธาน I กริยาไม่เติม s"
    },
    {
        id: 2,
        question: "2. Look! The boy _________ across the street.",
        options: ["run", "runs", "is running", "are running"],
        answer: 2,
        explanation: "มีคำว่า 'Look!' (ดูนั่นสิ!) แสดงว่ากำลังเกิดขึ้นเดี๋ยวนี้ ต้องใช้ Present Continuous ประธาน The boy คนเดียวใช้ is + V.ing"
    },
    {
        id: 3,
        question: "3. My mother usually _________ breakfast for us.",
        options: ["cook", "cooks", "is cooking", "cooking"],
        answer: 1,
        explanation: "มีคำว่า 'usually' (เป็นประจำ) = Present Simple. ประธาน My mother (เอกพจน์) กริยาต้องเติม s"
    },
    {
        id: 4,
        question: "4. Shh! The baby _________ in the bedroom.",
        options: ["sleep", "sleeps", "is sleeping", "are sleeping"],
        answer: 2,
        explanation: "'Shh!' (ชู่ว์!) บ่งบอกว่ากำลังกระทำอยู่ (กำลังนอน) = Present Continuous"
    },
    {
        id: 5,
        question: "5. Water _________ at 100 degrees Celsius.",
        options: ["boil", "boils", "is boiling", "boiling"],
        answer: 1,
        explanation: "เป็นความจริงตามธรรมชาติเสมอ = Present Simple. Water เป็นนามนับไม่ได้ (เอกพจน์) กริยาเติม s"
    },
    {
        id: 6,
        question: "6. We _________ English at the moment.",
        options: ["study", "studies", "is studying", "are studying"],
        answer: 3,
        explanation: "'at the moment' (ในขณะนี้) = Present Continuous. ประธาน We ใช้ are + V.ing"
    },
    {
        id: 7,
        question: "7. He _________ to the gym on weekends.",
        options: ["go", "goes", "is going", "going"],
        answer: 1,
        explanation: "'on weekends' (ทุกสุดสัปดาห์) = กิจวัตรประจำวัน ประธาน He เติม es ที่ go"
    },
    {
        id: 8,
        question: "8. I _________ a new mobile phone right now.",
        options: ["want", "wants", "am wanting", "is wanting"],
        answer: 0,
        explanation: "want (ต้องการ) เป็นกริยาบอกความรู้สึก ห้ามเติม -ing (ถึงแม้จะมี right now ก็ตาม)"
    },
    {
        id: 9,
        question: "9. They _________ football in the park now.",
        options: ["play", "plays", "is playing", "are playing"],
        answer: 3,
        explanation: "'now' = Present Continuous. They ใช้ are + V.ing"
    },
    {
        id: 10,
        question: "10. The train _________ at 8 PM every day.",
        options: ["leave", "leaves", "is leaving", "are leaving"],
        answer: 1,
        explanation: "ตารางเวลา/every day = Present Simple. The train เอกพจน์ เติม s"
    },
    {
        id: 11,
        question: "11. _________ you _________ your homework right now?",
        options: ["Do / do", "Are / doing", "Do / doing", "Are / do"],
        answer: 1,
        explanation: "'right now' = Present Cont. ประโยคคำถามเอา Verb to be ขึ้นหน้า (Are you doing...?)"
    },
    {
        id: 12,
        question: "12. What _________ your father _________ for a living?",
        options: ["do / do", "does / do", "is / doing", "are / doing"],
        answer: 1,
        explanation: "ถามอาชีพ = ถามสิ่งที่เป็นประจำ ใช้ Present Simple (What does ... do?)"
    },
    {
        id: 13,
        question: "13. Listen! Someone _________ at the door.",
        options: ["knock", "knocks", "is knocking", "are knocking"],
        answer: 2,
        explanation: "'Listen!' = กำลังเกิดตอนนี้. Someone ถือเป็นเอกพจน์ ใช้ is knocking"
    },
    {
        id: 14,
        question: "14. I _________ this movie. It's so boring.",
        options: ["don't like", "doesn't like", "am not liking", "not like"],
        answer: 0,
        explanation: "like (ชอบ) เป็นกริยาความรู้สึก ห้ามเติม -ing. I ใช้กับ don't"
    },
    {
        id: 15,
        question: "15. Please be quiet. I _________ to concentrate.",
        options: ["try", "tries", "am trying", "are trying"],
        answer: 2,
        explanation: "'Please be quiet' ขอให้เงียบเพราะ 'กำลัง' พยายามมีสมาธิอยู่"
    },
    {
        id: 16,
        question: "16. She _________ coffee, she prefers tea.",
        options: ["isn't drinking", "don't drink", "doesn't drink", "not drink"],
        answer: 2,
        explanation: "บอกความชอบโดยทั่วไป = Present Simple. She ใช้ doesn't"
    },
    {
        id: 17,
        question: "17. It _________ heavily outside right now.",
        options: ["rain", "rains", "is raining", "are raining"],
        answer: 2,
        explanation: "'right now' = กำลังเกิดขึ้น It is raining."
    },
    {
        id: 18,
        question: "18. How often _________ you _________ your teeth?",
        options: ["do / brush", "are / brushing", "does / brush", "do / brushes"],
        answer: 0,
        explanation: "How often (บ่อยแค่ไหน) ถามกิจวัตร = Present Simple."
    },
    {
        id: 19,
        question: "19. The earth _________ around the sun.",
        options: ["go", "goes", "is going", "are going"],
        answer: 1,
        explanation: "ความจริงตามธรรมชาติ = Present Simple"
    },
    {
        id: 20,
        question: "20. Why _________ you _________? Are you sad?",
        options: ["do / cry", "does / cry", "are / crying", "is / crying"],
        answer: 2,
        explanation: "เห็นว่าเขากำลังร้องไห้ จึงถามว่าทำไมถึงร้องไห้ (กำลังร้องอยู่)"
    },
    {
        id: 21,
        question: "21. I _________ you are right.",
        options: ["think", "thinks", "am thinking", "are thinking"],
        answer: 0,
        explanation: "think ในความหมายว่า 'เชื่อว่า/เห็นว่า' เป็นความคิด ห้ามเติม -ing"
    },
    {
        id: 22,
        question: "22. We _________ a party next Saturday.",
        options: ["have", "has", "are having", "is having"],
        answer: 2,
        explanation: "Present Cont. สามารถใช้กับอนาคตอันใกล้ที่วางแผนไว้แล้วอย่างแน่นอนได้"
    },
    {
        id: 23,
        question: "23. He never _________ to me.",
        options: ["listen", "listens", "is listening", "are listening"],
        answer: 1,
        explanation: "'never' = Present Simple. He เป็นเอกพจน์ กริยาเติม s"
    },
    {
        id: 24,
        question: "24. Where is Mom? She _________ in the kitchen.",
        options: ["cook", "cooks", "is cooking", "are cooking"],
        answer: 2,
        explanation: "ถามว่าตอนนี้แม่อยู่ไหน คำตอบคือสิ่งที่แม่ 'กำลัง' ทำอยู่ตอนนี้"
    },
    {
        id: 25,
        question: "25. My dog _________ bark at strangers.",
        options: ["isn't", "don't", "doesn't", "aren't"],
        answer: 2,
        explanation: "สุนัขของฉัน (เอกพจน์) ไม่เห่าคนแปลกหน้า (นิสัย) ใช้ doesn't"
    },
    {
        id: 26,
        question: "26. Look at the clouds. It _________ to rain.",
        options: ["starts", "is starting", "start", "are starting"],
        answer: 1,
        explanation: "'Look at' ให้ดูสถานการณ์ตอนนี้ ฝน 'กำลัง' เริ่มตก"
    },
    {
        id: 27,
        question: "27. I _________ my keys. Can you help me find them?",
        options: ["look for", "looks for", "am looking for", "is looking for"],
        answer: 2,
        explanation: "'กำลัง' หาอยู่ตอนนี้ เลยให้เพื่อนช่วยหา"
    },
    {
        id: 28,
        question: "28. Thai people _________ rice as their main food.",
        options: ["eat", "eats", "is eating", "are eating"],
        answer: 0,
        explanation: "เป็นความจริงทั่วไป People เป็นพหูพจน์ ไม่ต้องเติม s"
    },
    {
        id: 29,
        question: "29. Don't turn off the TV. I _________ it.",
        options: ["watch", "watches", "am watching", "are watching"],
        answer: 2,
        explanation: "ห้ามปิดทีวีนะ ฉัน 'กำลัง' ดูอยู่"
    },
    {
        id: 30,
        question: "30. _________ he _________ to play tennis?",
        options: ["Do / know", "Does / know", "Is / knowing", "Are / knowing"],
        answer: 1,
        explanation: "know เป็นกริยาความรู้ ห้ามใช้ -ing และ He ใช้กับ Does"
    },
    {
        id: 31,
        question: "31. The bus _________ at 9 AM.",
        options: ["arrive", "arrives", "is arriving", "are arriving"],
        answer: 1,
        explanation: "ตารางเวลา = Present Simple"
    },
    {
        id: 32,
        question: "32. I _________ a great book right now.",
        options: ["read", "reads", "am reading", "is reading"],
        answer: 2,
        explanation: "right now = Present Continuous"
    },
    {
        id: 33,
        question: "33. Cats _________ fish.",
        options: ["like", "likes", "are liking", "is liking"],
        answer: 0,
        explanation: "ความจริงทั่วไป Cats (พหูพจน์) like ไม่เติม s"
    },
    {
        id: 34,
        question: "34. My brother _________ a shower at the moment.",
        options: ["take", "takes", "is taking", "are taking"],
        answer: 2,
        explanation: "at the moment = Present Continuous"
    },
    {
        id: 35,
        question: "35. You _________ always _________ your keys!",
        options: ["do / lose", "does / lose", "are / losing", "is / losing"],
        answer: 2,
        explanation: "always + V.ing ใช้บ่นถึงพฤติกรรมที่ทำบ่อยจนน่ารำคาญ (คุณทำกุญแจหายตลอดเลย!)"
    },
    {
        id: 36,
        question: "36. The restaurant _________ at 10 PM.",
        options: ["close", "closes", "is closing", "are closing"],
        answer: 1,
        explanation: "เวลาเปิดปิดร้าน = Present Simple"
    },
    {
        id: 37,
        question: "37. They _________ to the radio now.",
        options: ["listen", "listens", "are listening", "is listening"],
        answer: 2,
        explanation: "now = Present Continuous"
    },
    {
        id: 38,
        question: "38. I _________ understand what you are saying.",
        options: ["am not", "don't", "doesn't", "isn't"],
        answer: 1,
        explanation: "understand เป็นกริยาความเข้าใจ ห้ามเติม -ing"
    },
    {
        id: 39,
        question: "39. What _________ you _________ tonight?",
        options: ["do / do", "are / doing", "does / do", "is / doing"],
        answer: 1,
        explanation: "ถามแพลนในอนาคตอันใกล้ที่แน่นอน ใช้ Present Continuous ได้ (คืนนี้คุณจะทำอะไร)"
    },
    {
        id: 40,
        question: "40. Wood _________ on water.",
        options: ["float", "floats", "is floating", "are floating"],
        answer: 1,
        explanation: "ความจริงตามธรรมชาติ (ไม้ลอยน้ำ) = Present Simple"
    },
    {
        id: 41,
        question: "41. I _________ in ghosts.",
        options: ["believe", "believes", "am believing", "are believing"],
        answer: 0,
        explanation: "believe (เชื่อ) ห้ามเติม -ing"
    },
    {
        id: 42,
        question: "42. The mechanic _________ my car right now.",
        options: ["repair", "repairs", "is repairing", "are repairing"],
        answer: 2,
        explanation: "right now = Present Continuous"
    },
    {
        id: 43,
        question: "43. We usually _________ dinner at 7 PM.",
        options: ["have", "has", "are having", "is having"],
        answer: 0,
        explanation: "usually = Present Simple"
    },
    {
        id: 44,
        question: "44. Look! The teacher _________ at you.",
        options: ["look", "looks", "is looking", "are looking"],
        answer: 2,
        explanation: "Look! = Present Continuous"
    },
    {
        id: 45,
        question: "45. She _________ 3 languages perfectly.",
        options: ["speak", "speaks", "is speaking", "are speaking"],
        answer: 1,
        explanation: "ความจริงทั่วไป/ความสามารถ = Present Simple"
    },
    {
        id: 46,
        question: "46. I _________ to the dentist tomorrow.",
        options: ["go", "goes", "am going", "is going"],
        answer: 2,
        explanation: "แพลนอนาคตที่นัดหมายไว้แล้ว = Present Continuous"
    },
    {
        id: 47,
        question: "47. The soup _________ delicious.",
        options: ["taste", "tastes", "is tasting", "are tasting"],
        answer: 1,
        explanation: "taste (มีรสชาติ) เป็นกริยาประสาทสัมผัส ห้ามเติม -ing"
    },
    {
        id: 48,
        question: "48. The chef _________ the soup to see if it needs more salt.",
        options: ["taste", "tastes", "is tasting", "are tasting"],
        answer: 2,
        explanation: "ข้อนี้ taste แปลว่า 'กำลังชิม' (การกระทำ) สามารถเติม -ing ได้"
    },
    {
        id: 49,
        question: "49. How much _________ this shirt _________?",
        options: ["do / cost", "does / cost", "is / costing", "are / costing"],
        answer: 1,
        explanation: "cost (มีราคา) ห้ามเติม -ing และ this shirt เอกพจน์ใช้ does"
    },
    {
        id: 50,
        question: "50. He _________ his homework. Don't disturb him.",
        options: ["do", "does", "is doing", "are doing"],
        answer: 2,
        explanation: "อย่ากวนเขา เขา 'กำลัง' ทำการบ้านอยู่"
    },
    {
        id: 51,
        question: "51. I _________ you are making a mistake.",
        options: ["feel", "feels", "am feeling", "is feeling"],
        answer: 0,
        explanation: "feel (รู้สึกว่า/คิดว่า) ห้ามเติม -ing"
    },
    {
        id: 52,
        question: "52. She _________ the material to check if it's soft.",
        options: ["feel", "feels", "is feeling", "are feeling"],
        answer: 2,
        explanation: "feel (กำลังคลำ/สัมผัส) เป็นการกระทำ เติม -ing ได้"
    },
    {
        id: 53,
        question: "53. The moon _________ around the earth.",
        options: ["go", "goes", "is going", "are going"],
        answer: 1,
        explanation: "ความจริงตามธรรมชาติ = Present Simple"
    },
    {
        id: 54,
        question: "54. I _________ weight because I eat too much fast food.",
        options: ["gain", "gains", "am gaining", "is gaining"],
        answer: 2,
        explanation: "เป็นสถานการณ์ชั่วคราวที่กำลังเกิดขึ้นในช่วงนี้ (กำลังน้ำหนักขึ้น)"
    },
    {
        id: 55,
        question: "55. Normally, I _________ at 6, but today I _________ at 8.",
        options: ["wake up / wake up", "wakes up / wakes up", "wake up / am waking up", "am waking up / wake up"],
        answer: 2,
        explanation: "Normally (กิจวัตร = Simple) , but today (แค่เฉพาะวันนี้ = Cont.)"
    },
    {
        id: 56,
        question: "56. He _________ a nice car.",
        options: ["have", "has", "is having", "are having"],
        answer: 1,
        explanation: "have แปลว่า 'มี' เป็นเจ้าของ ห้ามเติม -ing"
    },
    {
        id: 57,
        question: "57. We _________ lunch together right now.",
        options: ["have", "has", "are having", "is having"],
        answer: 2,
        explanation: "have lunch (กินข้าวกลางวัน) have แปลว่า 'กิน' เติม -ing ได้"
    },
    {
        id: 58,
        question: "58. What _________ that sign _________?",
        options: ["do / mean", "does / mean", "is / meaning", "are / meaning"],
        answer: 1,
        explanation: "mean (หมายความว่า) ห้ามเติม -ing"
    },
    {
        id: 59,
        question: "59. The population of the world _________ very fast.",
        options: ["increase", "increases", "is increasing", "are increasing"],
        answer: 2,
        explanation: "การเปลี่ยนแปลงที่กำลังดำเนินอยู่ (เพิ่มขึ้นเรื่อยๆ) ใช้ Present Continuous"
    },
    {
        id: 60,
        question: "60. I _________ I will pass this exam.",
        options: ["hope", "hopes", "am hoping", "is hoping"],
        answer: 0,
        explanation: "hope (หวังว่า) เป็นความรู้สึก นึกคิด มักใช้ใน Present Simple"
    }
];
