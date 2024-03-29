package ml.robobacheor.xjtlupasscode;

import androidx.annotation.ColorInt;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.Switch;
import android.widget.TextView;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.cert.CertificateException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Hashtable;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;


public class MainActivity extends AppCompatActivity {

    String msg = "XJTLU";

    WebView passcodeWebView = null;

    OkHttpClient client = getUnsafeOkHttpClient();

    enum Mode
    {
        INIT, XIPU, WENXING, XINGCHENG, SUKANG, DUKE;
    }

    Mode curMode = Mode.INIT;

    Boolean isHide = false;

    Button buttonHide = null;
    Button buttonDuke = null;
    Button buttonSukang= null;
    Button buttonXingcheng= null;
    Button buttonWenXing = null;
    Button buttonPasscode = null;
    Switch PCRSwitch = null;
    TextView debugTextView = null;

    private void buttonHideOnClick() {
        if (isHide) {
            isHide = false;
            buttonDuke.setVisibility(View.VISIBLE);
            buttonSukang.setVisibility(View.VISIBLE);
            buttonXingcheng.setVisibility(View.VISIBLE);
            buttonWenXing.setVisibility(View.VISIBLE);
            buttonPasscode.setVisibility(View.VISIBLE);
            PCRSwitch.setVisibility(View.VISIBLE);
            debugTextView.setVisibility(View.VISIBLE);
        } else {
            isHide = true;
            buttonDuke.setVisibility(View.INVISIBLE);
            buttonSukang.setVisibility(View.INVISIBLE);
            buttonXingcheng.setVisibility(View.INVISIBLE);
            buttonWenXing.setVisibility(View.INVISIBLE);
            buttonPasscode.setVisibility(View.INVISIBLE);
            PCRSwitch.setVisibility(View.INVISIBLE);
            debugTextView.setVisibility(View.INVISIBLE);
        }
    }

    WebViewClient myWebViewClient = new WebViewClient(){
        @Override
        public WebResourceResponse shouldInterceptRequest (WebView view,
                WebResourceRequest request){

            // System.out.println(request.getUrl());
            String urlSeg = request.getUrl().getLastPathSegment();
            // System.out.println(urlSeg);

            // check current state of a Switch (true or false).
            if (!PCRSwitch.isChecked()) {
                return null;
            }

            if (urlSeg != null && urlSeg.equals("queryLatestHs")) {

                String pattern = "yyyy-MM-dd HH:mm";

                DateFormat df = new SimpleDateFormat(pattern);

                Calendar cal = Calendar.getInstance();
                cal.add(Calendar.HOUR, -12);

                Date modifiedTime = cal.getTime();

                String modifiedTimeString = df.format(modifiedTime);

                String timeStamp = Long.toString(System.currentTimeMillis() / 1000);

                String modifiedResponseData = "{\"res\":{\"currentTime\":" + timeStamp + ",\"hs\":{\"area\":\"苏州工业园区\",\"collectTime\":\"" + modifiedTimeString + "\",\"collectUnit\":\"苏州市独墅湖医院\",\"collectCity\":\"苏州市\",\"checkResult\":\"阴性\",\"checkUnit\":\"苏州市独墅湖医院\"}},\"resMessage\":\"OK\",\"resCode\":0}";
                InputStream modifiedResponseStream = new ByteArrayInputStream(modifiedResponseData.getBytes(StandardCharsets.UTF_8));

                WebResourceResponse modifiedResponse = new WebResourceResponse("application/json", "utf-8", modifiedResponseStream);
                return modifiedResponse;
            }

            return null;
        }
    };

    private static OkHttpClient getUnsafeOkHttpClient() {
        try {
            // Create a trust manager that does not validate certificate chains
            final TrustManager[] trustAllCerts = new TrustManager[] {
                    new X509TrustManager() {
                        @Override
                        public void checkClientTrusted(java.security.cert.X509Certificate[] chain, String authType) throws CertificateException {
                        }

                        @Override
                        public void checkServerTrusted(java.security.cert.X509Certificate[] chain, String authType) throws CertificateException {
                        }

                        @Override
                        public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                            return new java.security.cert.X509Certificate[]{};
                        }
                    }
            };

            // Install the all-trusting trust manager
            final SSLContext sslContext = SSLContext.getInstance("SSL");
            sslContext.init(null, trustAllCerts, new java.security.SecureRandom());
            // Create an ssl socket factory with our all-trusting manager
            final SSLSocketFactory sslSocketFactory = sslContext.getSocketFactory();

            OkHttpClient.Builder builder = new OkHttpClient.Builder();
            builder.sslSocketFactory(sslSocketFactory, (X509TrustManager)trustAllCerts[0]);
            builder.hostnameVerifier(new HostnameVerifier() {
                @Override
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            });

            OkHttpClient okHttpClient = builder.build();
            return okHttpClient;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void refreshSukang(){

        if(curMode != Mode.XINGCHENG && curMode != Mode.SUKANG){
            ImageView wenxingBgView = (ImageView)findViewById(R.id.imageView3);
            wenxingBgView.setVisibility(View.INVISIBLE);

            ImageView codeView = (ImageView)findViewById(R.id.imageView2);
            codeView.setVisibility(View.INVISIBLE);
        }

        curMode = Mode.SUKANG;

        passcodeWebView = findViewById(R.id.webView);
        passcodeWebView.setWebViewClient(myWebViewClient);
        passcodeWebView.loadUrl("https://jsstm.jszwfw.gov.cn/jkmIndex.html?token=b70d63a998f44e8cbe069a7936750f0c0b55baf3c0bf495a86f1b4711023efe8&uuid=P202007261108482619831476");

    }

    public void refreshXingcheng(){

        if(curMode != Mode.XINGCHENG && curMode != Mode.SUKANG){
            ImageView wenxingBgView = (ImageView)findViewById(R.id.imageView3);
            wenxingBgView.setVisibility(View.INVISIBLE);

            ImageView codeView = (ImageView)findViewById(R.id.imageView2);
            codeView.setVisibility(View.INVISIBLE);
        }

        curMode = Mode.XINGCHENG;

        passcodeWebView = findViewById(R.id.webView);
        passcodeWebView.loadUrl("file:///android_asset/result.html?phone=185****0068&addr=江苏省苏州市");

    }

    public void refreshWenXing(){

        ImageView wenxingBgView = (ImageView)findViewById(R.id.imageView3);
        ImageView wenxingView = (ImageView)findViewById(R.id.imageView2);

        if(curMode != Mode.WENXING && curMode != Mode.XIPU){
            passcodeWebView = findViewById(R.id.webView);
            passcodeWebView.loadUrl("file:///android_asset/Passcode.html");
        }

        if (curMode != Mode.WENXING){
            wenxingBgView.setVisibility(View.VISIBLE);
            wenxingView.setVisibility(View.VISIBLE);
            wenxingView.setTranslationY(205);
            wenxingView.setScaleX(1.f);
            wenxingView.setScaleY(1.f);
        }

        curMode = Mode.WENXING;

        long timeStamp = System.currentTimeMillis();

        // String wenxingQRStr = "oIF__t4FOyjxLIeRwcs130wxoUdM|-|" + timeStamp;
        String wenxingQRStr = "or3265eTWLpabHcaI0MLcTHEowv0|-|" + timeStamp + "|x|huihutong";

        String timeNow = DateFormat.getDateTimeInstance().format(new Date());

        debugTextView.setText(timeNow + "\n" + wenxingQRStr);

        Bitmap passcodeBmp = createQRCodeBitmap(wenxingQRStr, 200, 200, null, "M", "0", 0xFF000000, 0xFFFFFFFF, true);

        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                wenxingView.setImageBitmap(passcodeBmp);
            }
        });
    }

    public void refreshPassCode(){

        ImageView wenxingBgView = (ImageView)findViewById(R.id.imageView3);

        debugTextView.setText("Refreshing...");

        ImageView passcodeView = (ImageView)findViewById(R.id.imageView2);

        if (curMode != Mode.XIPU) {
            passcodeWebView = findViewById(R.id.webView);
            passcodeWebView.loadUrl("file:///android_asset/Passcode.html");

            passcodeView.setVisibility(View.VISIBLE);
            passcodeView.setTranslationY(40);
            passcodeView.setScaleX(1.f);
            passcodeView.setScaleY(1.f);

            wenxingBgView.setVisibility(View.INVISIBLE);

            curMode = Mode.XIPU;
        }

        RequestBody emptybody = RequestBody.create(new byte[]{});

        Request request = new Request.Builder()
                .url("https://entry.xjtlu.edu.cn/api/PassCode/ShowPassCode")
                .method("POST", emptybody)
                .header("Connection", "keep-alive")
                .addHeader("sec-ch-ua", "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"")
                .addHeader("Content-Length", "0")
                .addHeader("Accept", "application/json, text/plain, */*")
                //.addHeader("cid", "f223116f-2e1c-4d1b-968f-85b8b8e80018") // R. Qi
                //.addHeader("cid", "0bcffe27-1d46-4ca4-b92a-ff562c41cafa") // Junyan Li
                .addHeader("cid", "22932662-eeaf-4c57-80bb-33dc18d3bd2a") //Jingyi Wang
                //.addHeader("cid", "452ea9b1-e3f4-4a1b-96ed-c8a359a956f9") //Yuechen Huang
                .addHeader("sec-ch-ua-mobile", "?0")
                .addHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36")
                .addHeader("Origin", "https://entry.xjtlu.edu.cn")
                .addHeader("Sec-Fetch-Site", "same-origin")
                .addHeader("Sec-Fetch-Mode", "cors")
                .addHeader("Sec-Fetch-Dest", "empty")
                .addHeader("Referer", "https://entry.xjtlu.edu.cn/user/")
                .addHeader("Accept-Language", "zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7")
                .addHeader("Cookie", "source=www.google.com; _ga=GA1.3.2059760248.1611815383")
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override public void onFailure(Call call, IOException e) {
                e.printStackTrace();

                debugTextView.setText(e.getMessage());
            }

            @Override public void onResponse(Call call, Response response) throws IOException {
                try (ResponseBody responseBody = response.body()) {
                    if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

                    Headers responseHeaders = response.headers();
                    for (int i = 0, size = responseHeaders.size(); i < size; i++) {
                        System.out.println(responseHeaders.name(i) + ": " + responseHeaders.value(i));
                    }

                    String passcodeInfo = responseBody.string();
                    String passcodeKey = "\"Code\"";
                    String QRInfo = "No Data";

                    boolean found;
                    for(int i = 100; i < passcodeInfo.length(); ++i){
                        found = true;
                        for(int j = 0; j < passcodeKey.length(); ++j){
                            if(i + j >= passcodeInfo.length()){
                                found = false;
                                break;
                            }
                            if(passcodeInfo.charAt(i + j) != passcodeKey.charAt(j)){
                                found = false;
                                break;
                            }
                        }
                        if(found){
                            i += 8;
                            QRInfo = (String)(passcodeInfo.subSequence(i, i + 96));
                            break;
                        }
                    }

                    String timeNow = DateFormat.getDateTimeInstance().format(new Date());

                    debugTextView.setText(timeNow + "\n" + QRInfo);

                    Bitmap passcodeBmp = createQRCodeBitmap(QRInfo, 200, 200, null, "H", "0", 0xFF00A650, 0xFFFFFFFF, true);

                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            passcodeView.setImageBitmap(passcodeBmp);
                        }
                    });

                }
            }
        });
    }


    public void refreshDKUCode(){

        ImageView wenxingBgView = (ImageView)findViewById(R.id.imageView3);

        debugTextView.setText("Refreshing...");

        ImageView passcodeView = (ImageView)findViewById(R.id.imageView2);

        if (curMode != Mode.DUKE) {
            passcodeWebView = findViewById(R.id.webView);
            passcodeWebView.loadUrl("file:///android_asset/DKU_Code.html");

            passcodeView.setVisibility(View.VISIBLE);
            passcodeView.setTranslationY(-70);
            passcodeView.setScaleX(0.8f);
            passcodeView.setScaleY(0.8f);

            wenxingBgView.setVisibility(View.INVISIBLE);

            curMode = Mode.DUKE;
        }

        RequestBody emptybody = RequestBody.create(new byte[]{});

        Request request = new Request.Builder()
                .url("http://access.dukekunshan.edu.cn/api/PassCode/GetUserPassCodeInfo?adcode=es356")
                .method("GET", null)
                .header("Connection", "keep-alive")
                .addHeader("Accept", "application/json, text/plain, */*")
                .addHeader("cid", "ccef7d85-5307-4e7c-881a-ad0d2203410a")
                .addHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36")
                .addHeader("Referer", "http://access.dukekunshan.edu.cn/user/")
                .addHeader("Accept-Language", "zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7")
                .addHeader("Cookie", "source=www.google.com; _ga=GA1.3.2059760248.1611815383")
                .addHeader("DNT", "1")
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override public void onFailure(Call call, IOException e) {
                e.printStackTrace();

                debugTextView.setText(e.getMessage());
            }

            @Override public void onResponse(Call call, Response response) throws IOException {
                try (ResponseBody responseBody = response.body()) {
                    if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

                    Headers responseHeaders = response.headers();
                    for (int i = 0, size = responseHeaders.size(); i < size; i++) {
                        System.out.println(responseHeaders.name(i) + ": " + responseHeaders.value(i));
                    }

                    String passcodeInfo = responseBody.string();
                    String passcodeKey = "PassCode\"";
                    String QRInfo = "No Data";

                    boolean found;
                    for(int i = 50; i < passcodeInfo.length(); ++i){
                        found = true;
                        for(int j = 0; j < passcodeKey.length(); ++j){
                            if(i + j >= passcodeInfo.length()){
                                found = false;
                                break;
                            }
                            if(passcodeInfo.charAt(i + j) != passcodeKey.charAt(j)){
                                found = false;
                                break;
                            }
                        }
                        if(found){
                            i += 11;
                            QRInfo = (String)(passcodeInfo.subSequence(i, i + 96));
                            break;
                        }
                    }

                    String timeNow = DateFormat.getDateTimeInstance().format(new Date());

                    debugTextView.setText(timeNow + "\n" + QRInfo);

                    Bitmap passcodeBmp = createQRCodeBitmap(QRInfo, 200, 200, null, "H", "0", 0xFF00A650, 0xFFFFFFFF, false);

                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            passcodeView.setImageBitmap(passcodeBmp);
                        }
                    });

                }
            }
        });
    }


    /**
     * 创建二维码位图 (支持自定义配置和自定义样式)
     *
     * @param content 字符串内容
     * @param width 位图宽度,要求>=0(单位:px)
     * @param height 位图高度,要求>=0(单位:px)
     * @param character_set 字符集/字符转码格式 (支持格式:{\@link CharacterSetECI })。传null时,zxing源码默认使用 "ISO-8859-1"
     * @param error_correction 容错级别 (支持级别:{\@link ErrorCorrectionLevel })。传null时,zxing源码默认使用 "L"
     * @param margin 空白边距 (可修改,要求:整型且>=0), 传null时,zxing源码默认使用"4"。
     * @param color_black 黑色色块的自定义颜色值
     * @param color_white 白色色块的自定义颜色值
     * @return
     */
    @Nullable
    public static Bitmap createQRCodeBitmap(String content, int width, int height,
                                            @Nullable String character_set, @Nullable String error_correction, @Nullable String margin,
                                            @ColorInt int color_black, @ColorInt int color_white, boolean golden){

        /** 1.参数合法性判断 */
        if(TextUtils.isEmpty(content)){ // 字符串内容判空
            return null;
        }

        if(width < 0 || height < 0){ // 宽和高都需要>=0
            return null;
        }

        try {
            /** 2.设置二维码相关配置,生成BitMatrix(位矩阵)对象 */
            Hashtable<EncodeHintType, String> hints = new Hashtable<>();

            if(!TextUtils.isEmpty(character_set)) {
                hints.put(EncodeHintType.CHARACTER_SET, character_set); // 字符转码格式设置
            }

            if(!TextUtils.isEmpty(error_correction)){
                hints.put(EncodeHintType.ERROR_CORRECTION, error_correction); // 容错级别设置
            }

            if(!TextUtils.isEmpty(margin)){
                hints.put(EncodeHintType.MARGIN, margin); // 空白边距设置
            }
            BitMatrix bitMatrix = new QRCodeWriter().encode(content, BarcodeFormat.QR_CODE, width, height, hints);

            /** 3.创建像素数组,并根据BitMatrix(位矩阵)对象为数组元素赋颜色值 */
            int[] pixels = new int[width * height];
            for(int y = 0; y < height; y++){
                for(int x = 0; x < width; x++){
                    if(bitMatrix.get(x, y)){
                        pixels[y * width + x] = color_black; // 黑色色块像素设置
                    } else {
                        pixels[y * width + x] = color_white; // 白色色块像素设置
                    }
                }
            }

            int[] goldenBg = new int[(width + 8) * (height + 8)];
            for(int y = 0; y < (width + 8) * (height + 8); y++){
                goldenBg[y] = 0xFFF4CC70;
            }

            /** 4.创建Bitmap对象,根据像素数组设置Bitmap每个像素点的颜色值,之后返回Bitmap对象 */

            Bitmap bitmap;
            if(golden){
                bitmap = Bitmap.createBitmap(width + 8, height + 8, Bitmap.Config.ARGB_8888);
                bitmap.setPixels(goldenBg, 0, width + 8, 0, 0, width + 8, height + 8);
                bitmap.setPixels(pixels, 0, width, 4, 4, width, height);
            }
            else{
                bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                bitmap.setPixels(pixels, 0, width, 0, 0, width, height);
            }

            return bitmap;
        } catch (WriterException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 设置当前APP的亮度
     *
     * @param brightnessPercent   0 to 1 adjusts the brightness from dark to full bright
     */
    public void setAppBrightness(float brightnessPercent)
    {
        Window window = this.getWindow();
        WindowManager.LayoutParams layoutParams = window.getAttributes();
        layoutParams.screenBrightness = brightnessPercent;
        window.setAttributes(layoutParams);
    }

    //获取图片的Bitmap对象
    private Bitmap getImg(String file) {
        Bitmap bmp = null;
        //获取AssetsMng对象
        AssetManager am = getResources().getAssets();
        try {
            //打开文件,返回输入流
            InputStream is = am.open(file);
            //Bitmap工厂解码输入流,得到bmp对象
            bmp = BitmapFactory.decodeStream(is);
            is.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return bmp;
    }

    /** 当活动第一次被创建时调用 */
    @SuppressLint("SetJavaScriptEnabled")
    @Override
    public void onCreate(Bundle savedInstanceState) {

        getSupportActionBar().hide();

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.d(msg, "The onCreate() event");

        buttonHide = findViewById(R.id.button6);
        buttonDuke = findViewById(R.id.button5);
        buttonSukang= findViewById(R.id.button4);
        buttonXingcheng= findViewById(R.id.button3);
        buttonWenXing = findViewById(R.id.button2);
        buttonPasscode = findViewById(R.id.button);
        PCRSwitch = (Switch) findViewById(R.id.switch1);
        debugTextView = (TextView)findViewById(R.id.textView1);

        passcodeWebView = findViewById(R.id.webView);
        passcodeWebView.loadUrl("file:///android_asset/Passcode.html");

        WebSettings webSettings = passcodeWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        setAppBrightness(1.0f);

        buttonPasscode.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                refreshPassCode();
            }
        });

        buttonWenXing.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                refreshWenXing();
            }
        });

        buttonXingcheng.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                refreshXingcheng();
            }
        });

        buttonSukang.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                refreshSukang();
            }
        });

        buttonDuke.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                refreshDKUCode();
            }
        });

        buttonHide.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                // Code here executes on main thread after user presses button
                buttonHideOnClick();
            }
        });

        ImageView wenxingBgView = (ImageView)findViewById(R.id.imageView3);
        Bitmap wenxingBmp = getImg("wenxing_screenshot.png");

        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                wenxingBgView.setImageBitmap(wenxingBmp);
            }
        });

        PCRSwitch.setAlpha(0.3f);
    }

    /** 当活动即将可见时调用 */
    @Override
    protected void onStart() {
        super.onStart();
        Log.d(msg, "The onStart() event");

        refreshPassCode();

    }

    /** 当活动可见时调用 */
    @Override
    protected void onResume() {
        super.onResume();
        Log.d(msg, "The onResume() event");
    }

    /** 当其他活动获得焦点时调用 */
    @Override
    protected void onPause() {
        super.onPause();
        Log.d(msg, "The onPause() event");
    }

    /** 当活动不再可见时调用 */
    @Override
    protected void onStop() {
        super.onStop();
        Log.d(msg, "The onStop() event");
    }

    /** 当活动将被销毁时调用 */
    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d(msg, "The onDestroy() event");
    }
}