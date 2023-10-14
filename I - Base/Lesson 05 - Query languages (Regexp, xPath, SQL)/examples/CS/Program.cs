using HtmlAgilityPack;


//=============== Loading from string ================

//@ - multiline string, html in format of string
String htmlString = @"
<html>
<head>
</head>
<body>
    <div class='classA'>I am from classA div</div>
    <div class='classA'>I am from classA too</div>
    <div class='classB'>I am from <b>classB</b> div</div>
</body>
</html>
";


HtmlDocument hDoc = new HtmlDocument();
hDoc.LoadHtml(htmlString);

HtmlNodeCollection? hnodes = hDoc.DocumentNode.SelectNodes("//div");

foreach (HtmlNode item in hnodes)
{
    //I am from classA div
    //I am from classA too
    //I am from <b>classB</b> div
    Console.WriteLine(item.InnerHtml);
}


//======== Loading from URL ==========================

string url = "http://antivariantum.com/lesson9.html";

HttpClient client = new HttpClient();
string html = await client.GetStringAsync(url);

Console.WriteLine(html);//Shows all html document

HtmlDocument htmlDoc = new HtmlDocument();
htmlDoc.LoadHtml(html);
HtmlNodeCollection? htmlNodes = htmlDoc.DocumentNode.SelectNodes("//h1");

if (htmlNodes is not null)
{
    foreach (HtmlNode item in htmlNodes)
    {
        Console.WriteLine(item.InnerHtml);//Заняття 9
    }
}


findInnerHtmlByXPath(htmlDoc, "//button[@id='button1']");//Кнопка 1
findInnerHtmlByXPath(htmlDoc, "/html/body/button[2]");//Кнопка 2

//Додайте в TestRail новий проект
//Додайте milestone
//Додайте кейс про зміну кольора кнопок. Окремо для кожної.
//Додайте TestRun, включить обидва теста
//Протестуйте
//Сформуйте звіт Results: Comparison For Cases
findInnerHtmlByXPath(htmlDoc, "//li");

//Додайте milestone
//Додайте кейс про зміну кольора кнопок. Окремо для кожної.
//Сформуйте звіт Results: Comparison For Cases
findInnerHtmlByXPath(htmlDoc, "//li[last()]");//all last li


void findInnerHtmlByXPath(HtmlDocument doc, string xpath)
{
    HtmlNodeCollection? htmlNodes = doc.DocumentNode.SelectNodes(xpath);

    if (htmlNodes is not null)
    {
        foreach (HtmlNode item in htmlNodes)
        {

            Console.WriteLine(item.InnerHtml);
        }
    }
}

//<button id="button1" type="button" onclick="fn1()">Кнопка 1</button>
findOuterHtmlByXPath(htmlDoc, "//button[@id='button1']");

findOuterHtmlByXPath(htmlDoc, "//p[text()='Підказка']");//null

//<p>Аналізуючи текст помилки і посилання на строку з помилкою в Console DevTools,
//       спробуйте знайти помилку. Підказка: обидві javascript функції fn1() і fn2() однакові. 
//    </p>
findOuterHtmlByXPath(htmlDoc, "//p[contains(text(),'Підказка')]");

//Whole body
findOuterHtmlByXPath(htmlDoc, "//body[child::p[contains(text(),'Підказка')]]");

void findOuterHtmlByXPath(HtmlDocument doc, string xpath)
{
    HtmlNodeCollection? htmlNodes = doc.DocumentNode.SelectNodes(xpath);

    if (htmlNodes is not null)
    {
        foreach (HtmlNode item in htmlNodes)
        {

            Console.WriteLine(item.OuterHtml);
        }
    }
}
