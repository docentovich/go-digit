<?php
$conf['from'] = "site";  //Ваше имя - или имя Вашего сайта. Будет показывать при прочтении в поле "От кого"
$conf['from-email'] = "noreplay@site.ru";  //Будет показывать при прочтении в поле "От кого" email
$conf['to-email'] = "site@site.ru";  //куда будут идти заявки


error_reporting(0);
header("HTTP/1.1 200 OK");
include "_sendform.php";



if(isset($_POST['token']))
    if($_POST['token']=="tnbm567sgfg4556sdfDSg"){

        if(isset($_POST['email'])){
            $_message[] = "Емайл " . $_POST['email'];
            $_sms[] =  substr($_POST['email'], 0, 10); //лимитируем смс по кол-во символов
        }
        
        if(isset($_POST['name'])){
            $_message[] = "Имя " . $_POST['name'];
            $_sms[] = substr($_POST['name'], 0, 10); //лимитируем смс по кол-во символов
        }
        
        if(isset($_POST['phone'])){
            $_message[] = "Телефон " . $_POST['phone'];
            $_sms[] = substr($_POST['phone'], 0, 15); //лимитируем смс по кол-во символов
        }
        
        if(isset($_POST['question'])){
            $_message[] = "Вопрос " . $_POST['question'];
            $_sms[] = "quest"; //лимитируем смс по кол-во символов
        }

        //все прочие
        foreach($_POST as $row=>$val){
            if( in_array($row, ['email', 'token', 'name', 'phone', 'question']) ) continue;

            $_message[] = $row.": ".$val;
        }


        $_message[] = "Страничка - " . $_SERVER['HTTP_REFERER'];
        $_t = explode("/", $_SERVER['HTTP_REFERER']); //получаем последнюю составляющую урла
        $_sms[] = substr($_t[count($_t)-1], 0, 7); //отрезаем от нее первые 7 символов чтобы смс было короче


        $message = implode(" || ", $_message);
        $sms = implode("|", $_sms);

        $rezult = _mail ($conf['from-email'], $conf['to-email'], 'С сайта заявочка!', $message);
        //$rezult = _smtpmail ($conf['from-email'], $conf['to-email'], 'С сайта заявочка!', $message);

        //смс без курла
        // $body=file_get_contents("https://sms.ru/sms/send?api_id=[ваш ключ, виден после авторизации]&to=[номер получателя]&text=".urlencode(iconv("windows-1251","utf-8", $sms))); # Если приходят крякозябры, то уберите iconv и оставьте только "Привет!"

        //смс с курлом
        // $ch = curl_init("https://sms.ru/sms/send");
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
        // curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        // curl_setopt($ch, CURLOPT_POSTFIELDS, array(

        //     "api_id"        =>  "[ваш ключ, виден после авторизации]",
        //     "to"            =>  "[номер получателя]",
        //     "text"      =>  iconv("windows-1251","utf-8", $sms) # Если приходят крякозябры, то уберите iconv и оставьте только "Привет!"

        // ));
        // $body = curl_exec($ch);
        // curl_close($ch);

        if($rezult) echo "OK";
        exit();
    }

    echo "error";
    exit();