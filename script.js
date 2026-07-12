function start(){

let now = new Date();

let date = now.getFullYear() + "-" +
(now.getMonth()+1) + "-" +
now.getDate() + " " +
now.getHours() + ":" +
now.getMinutes() + ":" +
now.getSeconds();

let input = document.getElementById("situation").value;


let status = "";
let advantage = "";
let blind = "";
let advice = "";


// 探索型
if(
input.includes("学习") ||
input.includes("方向") ||
input.includes("不知道") ||
input.includes("很多")
){

status = "你正在探索阶段，正在寻找适合自己的方向。";

advantage = "你的好奇心和探索能力较强，愿意主动寻找答案。";

blind = "容易同时关注太多方向，导致行动被分散。";

advice = "选择一个小目标，用实践验证自己的想法。";

}


// 执行问题
else if(
input.includes("拖延") ||
input.includes("坚持") ||
input.includes("完成不了")
){

status = "你正在执行调整阶段。";

advantage = "你已经意识到问题，并希望改变。";

blind = "可能把目标设置得过大，导致行动压力增加。";

advice = "降低任务难度，建立小的完成循环。";

}


// 实践成长
else if(
input.includes("完成") ||
input.includes("项目") ||
input.includes("成功")
){

status = "你正在进入实践成长阶段。";

advantage = "你开始把想法转化为实际行动。";

blind = "需要避免只追求新想法，而忽略持续优化。";

advice = "继续迭代已有成果，形成长期积累。";

}


// 默认
else{

status = "你正在观察和探索自己的阶段。";

advantage = "你愿意主动反思自己的状态。";

blind = "目前信息较少，需要更多记录了解自己。";

advice = "持续记录自己的变化，让未来的自己更了解现在。";

}



document.getElementById("result").innerHTML = `

<h3>
AI观察报告
</h3>


<p>
观察时间：
${date}
</p>


<p>
你的输入：
${input}
</p>


<p>
当前状态：
${status}
</p>


<p>
优势：
${advantage}
</p>


<p>
潜在盲点：
${blind}
</p>


<p>
未来建议：
${advice}
</p>

`;

localStorage.setItem("myReport", 
`
观察时间：${date}

你的输入：
${input}

当前状态：
${status}

优势：
${advantage}

潜在盲点：
${blind}

未来建议：
${advice}
`
);

}