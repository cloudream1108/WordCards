// 單字 excel轉json https://www.bejson.com/json/col2json/
let wordLists = {
    B3L7 : [
        { "english": "theory", "chinese": "n. 學說；理論" },
        { "english": "theoretical", "chinese": "adj. 理論上的" },
        { "english": "psychology", "chinese": "n. 心理學" },
        { "english": "psychological", "chinese": "adj. 心理上的" },
        { "english": "demonstrate", "chinese": "vt. 表達；展示" },
        { "english": "demonstration", "chinese": "n. 表達；示範" },
        { "english": "interpret", "chinese": "vt. 理解；詮釋" },
        { "english": "interpretation", "chinese": "n. 解釋；詮釋" },
        { "english": "determine", "chinese": "vt. 查明；測出；決定" },
        { "english": "determination", "chinese": "n. 查明；測出；決心" },
        { "english": "stiff", "chinese": "adj. 僵硬的" },
        { "english": "scratch", "chinese": "vt. 搔抓／n. 刮痕；抓傷" },
        { "english": "exhibit", "chinese": "vt. 表現；表露；展覽" },
        { "english": "exhibition", "chinese": "n. 表現；表露；展覽" },
        { "english": "gesture", "chinese": "n. 手勢；姿勢／vi. 用動作示意" },
        { "english": "moreover", "chinese": "adv. 此外" },
        { "english": "conscious", "chinese": "adj. 意識到；注意到" },
        { "english": "consciousness", "chinese": "n. 意識" },
        { "english": "observe", "chinese": "vt. 觀察" },
        { "english": "observation", "chinese": "n. 觀察" },
        { "english": "reverse", "chinese": "n. 相反的情況或事物／vt. 反轉／adj. 相反的" },
        { "english": "significant", "chinese": "adj. 重要的；顯著的" },
        { "english": "significance", "chinese": "n. 重要性；意義" },
        { "english": "circumstance", "chinese": "n. 條件；狀況" },
        { "english": "initially", "chinese": "adv. 起初" },
        { "english": "initial", "chinese": "adj. 最初的" },
        { "english": "glance", "chinese": "vi. 匆匆一瞥／n. 匆匆一瞥" },
        { "english": "automatically", "chinese": "adv. 無意識地；不假思索地" },
        { "english": "automatic", "chinese": "adj. 自動的" },
        { "english": "track", "chinese": "vt. 追蹤" },
        { "english": "adore", "chinese": "vt. 愛慕；熱愛" },
        { "english": "affection", "chinese": "n. 喜愛" },
        { "english": "interact", "chinese": "vi. 互動；交流" },
        { "english": "interaction", "chinese": "n. 互動" },
        { "english": "meaningful", "chinese": "adj. 有意義的；重要的" },
        { "english": "fellow", "chinese": "adj. 同伴的；同事的／n. 同事；同輩" },
        { "english": "account for", "chinese": "(數量上)佔⋯⋯" },
        { "english": "as well", "chinese": "此外；也" },
        { "english": "in the case of …", "chinese": "關於；在⋯⋯的情況下" },
        { "english": "under the circumstances", "chinese": "在這種情況下" },
        { "english": "follow suit", "chinese": "照著做" },
        { "english": "aside from", "chinese": "除了⋯⋯之外" },
        { "english": "best of all", "chinese": "最棒地" }
    ],
    B3L8 : [
        { "english": "abuse", "chinese": "n. 虐待／vt. 虐待" },
        { "english": "highlight", "chinese": "n. 最精彩的部分／vt. 強調" },
        { "english": "economy", "chinese": "n. 經濟" },
        { "english": "economic", "chinese": "adj. 經濟上的；經濟學的" },
        { "english": "economical", "chinese": "adj. 節約的；經濟實惠的" },
        { "english": "demand", "chinese": "n. 需求；要求／vt. 要求" },
        { "english": "illegal", "chinese": "adj. 非法的" },
        { "english": "legal", "chinese": "adj. 合法的；法律的" },
        { "english": "herd", "chinese": "n. 獸群" },
        { "english": "lure", "chinese": "vt. 引誘／n. 誘惑；吸引力" },
        { "english": "brutal", "chinese": "adj. 殘暴的" },
        { "english": "mercilessly", "chinese": "adv. 冷酷無情地；殘忍地" },
        { "english": "merciless", "chinese": "adj. 冷酷無情的；殘忍的" },
        { "english": "mercy", "chinese": "n. 仁慈；慈悲" },
        { "english": "operator", "chinese": "n. 經營者" },
        { "english": "operate", "chinese": "vi. 經營；營運" },
        { "english": "operation", "chinese": "n. 營運；業務" },
        { "english": "strike", "chinese": "vt. 打；擊／n. 罷工" },
        { "english": "commit", "chinese": "vt. 做出(錯事)；犯(罪)；承諾；保證" },
        { "english": "commitment", "chinese": "n. 承諾；保證" },
        { "english": "obedient", "chinese": "adj. 服從的；順從的" },
        { "english": "obedience", "chinese": "n. 服從" },
        { "english": "tame", "chinese": "vt. 馴服／adj. 馴服的" },
        { "english": "vulnerable", "chinese": "adj. 脆弱的；容易受傷害的" },
        { "english": "permanent", "chinese": "adj. 永久的" },
        { "english": "adequate", "chinese": "adj. 充足的；足夠的" },
        { "english": "exhaustion", "chinese": "n. 筋疲力盡" },
        { "english": "exhaust", "chinese": "vt. 使筋疲力盡" },
        { "english": "complex", "chinese": "adj. 複雜的" },
        { "english": "intelligent", "chinese": "adj. 聰明的；有才智的" },
        { "english": "intelligence", "chinese": "n. 智力；才智" },
        { "english": "lead to", "chinese": "導致；造成" },
        { "english": "what's more", "chinese": "此外" },
        { "english": "worse still", "chinese": "更糟的是" },
        { "english": "deal with", "chinese": "解決；處理" },
        { "english": "take pleasure in", "chinese": "以⋯⋯為樂；喜歡做⋯⋯" },
        { "english": "go about", "chinese": "做⋯⋯；忙碌於⋯⋯" }
    ],
    B3L9 : [
        { "english": "pilgrimage", "chinese": "n. 朝聖之旅" },
        { "english": "pilgrim", "chinese": "n. 朝聖者；香客" },
        { "english": "unify", "chinese": "vt. 使⋯⋯成為一體；凝聚" },
        { "english": "exaggeration", "chinese": "n. 誇張；誇大" },
        { "english": "exaggerate", "chinese": "vi. 誇張；誇大" },
        { "english": "undoubtedly", "chinese": "adv. 無疑地" },
        { "english": "exact", "chinese": "adj. 精確的" },
        { "english": "authorities", "chinese": "n. 當局；掌權者" },
        { "english": "authority", "chinese": "n. 權力" },
        { "english": "cast", "chinese": "vt. 擲；拋／n. 擲；抛；(一齣戲劇或一部電影的)全體演員" },
        { "english": "fade", "chinese": "vi. 逐漸消失" },
        { "english": "throng", "chinese": "n. 聚集的人群；一大群人" },
        { "english": "explosive", "chinese": "adj. 震耳欲聾的" },
        { "english": "explode", "chinese": "vi. vt. 爆炸；引爆" },
        { "english": "explosion", "chinese": "n. 爆炸；爆裂" },
        { "english": "pierce", "chinese": "vt. vi. (光線、聲音等)穿過／vt. 扎；刺穿" },
        { "english": "emerge", "chinese": "vi. 出現" },
        { "english": "blessing", "chinese": "n. 神的祝福" },
        { "english": "bless", "chinese": "vt. 祝福" },
        { "english": "kneel", "chinese": "vi. 跪" },
        { "english": "pavement", "chinese": "n. (鋪過的)路面" },
        { "english": "hospitality", "chinese": "n. 好客" },
        { "english": "hospitable", "chinese": "adj. 好客的" },
        { "english": "enthusiastically", "chinese": "adv. 熱情地" },
        { "english": "enthusiastic", "chinese": "adj. 熱情的" },
        { "english": "enthusiasm", "chinese": "n. 熱情；熱忱" },
        { "english": "facilities", "chinese": "n. 設施" },
        { "english": "facility", "chinese": "n. 場所" },
        { "english": "accommodations", "chinese": "n. 住宿" },
        { "english": "accommodate", "chinese": "vt. 容納" },
        { "english": "religious", "chinese": "adj. 宗教的" },
        { "english": "religion", "chinese": "n. 宗教" },
        { "english": "humanity", "chinese": "n. 人道；仁慈" },
        { "english": "ritual", "chinese": "n. 宗教儀式" },
        { "english": "belief", "chinese": "n. 宗教信仰；相信；信心" },
        { "english": "designate", "chinese": "vt. 指定；認定" },
        { "english": "heritage", "chinese": "n. (一國家或社會所形成的)遺產" },
        { "english": "set out", "chinese": "出發" },
        { "english": "send ... off", "chinese": "送行" },
        { "english": "in the meantime", "chinese": "期間；同時" },
        { "english": "all manner of", "chinese": "各式各樣的" },
        { "english": "be looking to ...", "chinese": "試圖⋯⋯" }
    ]
};