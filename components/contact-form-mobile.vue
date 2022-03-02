<template>
                         <form class="form_mobile" action="../forms/forms.cgi" id="contactform" 
onSubmit="document.getElementById('form_url').value=window.location.href;document.getElementById('form_piece').value=$('h1').text();return true;" 
method="post" name="contactform">
                        
                        <input id="cid3" name="cid" type="hidden" value="173">
                        <input id="fid3" name="fid" type="hidden" value="64">
                        <input id="field_labels1" name="field_labels1" type=
                        "hidden" value="Piece Title,URL,Name,Email,Phone,Comments"> <input id=     
                        "field_names1" name="field_names1" type="hidden" value=
                        "form_piece,form_url,name*,email*,phone*,comments">
                        <input type="hidden" id="form_piece" name="form_piece" value="">
                        <input type="hidden" id="form_url" name="form_url" value="">

                       <input placeholder="Name" id="name" name="name" type="text"> 
                        <input placeholder="Email" id="email" name="email" type="text">         
                       <input placeholder="Phone" id="phone" name="phone" type="text"> 

                      
                        <textarea id="comments" name="comments" style="min-height:100px;" placeholder="Message"></textarea>
                         <span style="font-size: 14px;">We will only use your email to reply to you. We respect your privacy.</span>
                        <div style="margin-top: 12px;" class="g-recaptcha" data-sitekey="6LejFhoUAAAAANMJ5K14AqlF-2kLGLvrbOvi50ZD"></div>
                        <div class="buttons">
                            <button class="submit">Send</button>
                        </div>
                    </form>
                       


</template>