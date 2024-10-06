var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Chou Chin Chow",
    sex: "Male",
    age:'47',
    phone: "(+86)13544930876 (+853) 62110169",
    email: "chiuchow12@gmail.com",
    address: "Yufeng Mingmen Zhongshan · Guangdong",
    expect_work: "Executive chef",

    /*在这里配置首页的座右铭集合*/
    motto: [
        "To be both a speaker of words and a doer of deeds。",
        "The greatest test of courage on earth is to bear defeat without losing heart.",
        "The shortest way to do many things is to only one thing at a time.",
        "The world is like a mirror: Frown at it and it frowns at you; smile, and it smiles too.",
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "Welcome , I am Chiu Chin Chow.<br>" +
             "Glad to See you",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>I am an experienced chef with over 20 years of experience in a prestigious Forbes Award five-star hotel in Macau.</p>" +
        "<p>I have solid cooking skills and rich kitchen management experience. Paying attention ot details and pursuing perfection, we are committed to providing diners with delicious, healthy and innovative food experiences.</p>" +
        "<p>In terms of team management, I am good at stimulating employees' potential,\n" +
        "creating a positive working atmosphere, and leading the team to grow together. </p>",



    /**
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */
    skills: [
        ["Menu Creativity and R&D", 95, "red"],
        ["Team management and training", 95, "blue"],
        ["Kitchen hygiene and safety standards", 88, "rgba(0,0,0)"],
        ["Cost Control and Food Utilization", 90, "yellow"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>Menu Creativity and R&D </li>" +
        "     <li>Team management and training</li>" +
        "     <li>Kitchen hygiene and safety standards</li>" +
        "     <li>Cost Control and Food Utilization</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/p1.jpg", "", "", ""],
        ["./images/p2.jpg", "", "", ""],
        ["./images/p3.jpg", "", "", ""],
        ["./images/p4.jpg", "", "", ""],
        ["./images/p5.jpg", "", "", ""],
        ["./images/p6.jpg", "", "", ""]
    ],

    design_food: [
        ["./images/h1.jpg", "", "", ""],
        ["./images/h2.jpg", "", "", ""],
        ["./images/h3.jpg", "", "", ""],
        ["./images/h4.jpg", "", "", ""],
        ["./images/h5.jpg", "", "", ""],
        ["./images/h6.jpg", "", "", ""],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        ["Jul 2015 - Jan 2024", "<br>Executive Chef",
            "<p><strong>Wynn Macau Resort, Macau S.A.R., Macau</strong></p>" +
            "<p>Responsible for formulating the restaurant menu and constantly innovating dishes according to market demand and seasonal changes to ensure the diversity\n" +
            "and appeal of the dishes.</p>" +
            "<p>Manage the kitchen team, including recruiting, training, evaluating and motivating\n" +
            "staff to improve the overall quality and efficiency of the team.</p>" +
            "<p>Supervise the procurement and inventory management of ingredients to ensure the freshness and quality of ingredients and control costs.</p>" +
            "<p>Develop kitchen hygiene and safety standards and strictly implement food hygiene regulations ot ensure food safety.</p>" +
            "<p>Work with restaurant managers and other departments to develop marketing strategies to increase the restaurant's visibility and reputation.</p>"
        ],

        ["Aug 2006 -Jun 2015", "<br>CDP /Sous Chef /Head Chef",
            "<p><strong>Wynn Macau Resort, Macau S.A.R., Macau</strong></p>" +
            "<p>Lead the kitchen team to complete daily cooking tasks to ensure the quality and speed of dishes</p>" +
            "<p>Assist the executive chef in the research and development and innovation of dishes and make reasonable suggestions.</p>" +
            "<p>Responsible for the maintenance and upkeep of kitchen equipment to ensure normal operation of the equipment.</p>" +
            "<p>Participate ni restaurant cost control, rationally arrange the use of ingredients and reduce waste.</p>"
        ],

        ["Jun 2004 - Jun 2006", "<br>Demi Chef - Cafe",
            "<p><strong>Langham Place Hotel, Mong Kok, Hong Kong, Hong Kong</strong></p>"
        ],

        ["Jun 1999 - Jun 2004", "<br>Partie Chef",
            "<p><strong>Grand Stanford Intercontinental Hotel, Hong Kong</strong></p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2024-04-24", "Diamond Award", "Won the Wynn Macau Diamond award。"],
        ["2023-06-16", "Asia's Top 50 Restaurants Awards Ceremony", "Chief person in charge of catering event design for Asia's Top 50 Restaurants Awards Ceremony"],
        ["2022-07-24", "Culinary Design Competitions", "Led the Wynn Macau team to participate in Culinary Design Competitions and won multiple championships"],
        ["2021-8-22", "Palace Qingdao Beer Festival", "Wynn Palace Qingdao Beer Festival Event Manager"],
        ["2018-6-14", "Zhejiang Satellite TV Guest", "Invited to participate in the recording of Zhejiang Satellite TV's <<I heard it tastes delicious>>"],
        ["2016-9-13", "International and Domestic celebrity chef exchange activities", "Head of international and Domestic celebrity chef exchange activities, Wynn Macau"],
        ["2014-11-14", "HACCP 2014", "Led the Wynn palace team to obtain HACCP 2014 certification，"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/linkin.png", "", "linkin"],
        ["./svg/wechat.png", "", "wechat"],
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/bg.jpg",
        "./images/logo.jpg",
        "./images/work-bk.jpg",
        "./images/other_bg.jpg",
        "./images/bg.jpg",
    ]

}
