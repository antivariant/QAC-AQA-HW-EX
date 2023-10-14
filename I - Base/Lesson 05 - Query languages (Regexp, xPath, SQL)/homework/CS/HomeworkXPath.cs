using HtmlAgilityPack;

namespace CS;
public class HomeworkXPath
{
    static string html = @"
        <html>
        <head>
        </head>
        <body>
            <p>This is <b>text</b> line1</p>
            <div class='classA'>
                <div>Text 0</div>
                <div class='classA'>Text 1</div>
                <div id='id1'>Text 2</div>
            </div>
            <p>
                <ol>
                    <li>List 1</li>
                    <li>List 2</li>
                </ol>
                <ol>
                    <li>List 3</li>
                    <li>List 4</li>
                </ol>
            </p>
        </body>
        </html>
        ";

    //Lookup by id
    public string example1()
    {
        HtmlDocument doc = new HtmlDocument();
        doc.LoadHtml(html);
        HtmlNodeCollection col = 
         doc.DocumentNode.SelectNodes("//div[@id='id1']");//Text 1
        return col[0].InnerHtml;
    }

    //Lookup by fixed index
    public string example2()
    {
        HtmlDocument doc = new HtmlDocument();
        doc.LoadHtml(html);
        HtmlNodeCollection col = 
         doc.DocumentNode.SelectNodes("//ol/li[2]");//List 2
        return col[0].InnerHtml;
    }

    //Lookup by parent class
    public string example3()
    {
        HtmlDocument doc = new HtmlDocument();
        doc.LoadHtml(html);
        HtmlNodeCollection col = 
         doc.DocumentNode.SelectNodes("//div[parent::div[@class='classA']]");//Text 0
        return col[0].InnerHtml;
    }

    //Lookup by child text
    public string example4()
    {
        HtmlDocument doc = new HtmlDocument();
        doc.LoadHtml(html);
        HtmlNodeCollection col = 
         doc.DocumentNode.SelectNodes("//p[child::b[text()='text']]");//This is <b>text</b> line1
        return col[0].InnerHtml;
    }

    //Lookup by last()
    public string example5()
    {
        HtmlDocument doc = new HtmlDocument();
        doc.LoadHtml(html);
        HtmlNodeCollection col = 
        doc.DocumentNode.SelectNodes("//ol[last()]/li[last()]");//List 4
        return col[0].InnerHtml;
    }


}
