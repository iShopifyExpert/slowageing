let res = [];
let temp = '';
const Questions = {
    0: {
        type: 'text',
        message: 'Hello, welcome!',
        next: 1
    },
    1: {
        type: 'select',
        options: [
            { value: '1', text: 'Dry', next: 2 },
            { value: '2', text: 'Oily', next: 2 },
            { value: '3', text: 'Combination', next: 2 },
            { value: '4', text: 'Sensitive', next: 2 },
            { value: '5', text: 'Normal', next: 2 }
        ],
        key: 's1',
        message: 'How would you describe your skin?',
        answer: 'I have <%=answer.s1%> skin',
    },
    2: {
        type: 'select_vertical',
        options: [
            { value: '1', text: 'Uneven texture (looks patchy & feels ‘bumpy’)', next: 3 },
            { value: '2', text: 'Breakouts (prone to blemishes & spots)', next: 3 },
            { value: '3', text: 'Redness (flares up & looks ‘angry’; may feel sore)', next: 3 },
            { value: '4', text: 'Dullness (looks lacklustre & lacks clarity)', next: 3 },
            { value: '5', text: 'Dehydration (looks dry, flaky & feels tight)', next: 3 },
        ],
        key: 's2',
        message: 'How does your skin react when it’s in distress?',
        answer: '<%=answer.s2%>'
    },
    3: {
        type: 'select_vertical',
        options: [
            { value: '1', text: 'Regular Sebum Production & Reduced Blemishes', next: 4 },
            { value: '2', text: 'Nourished & Hydrated Skin ', next: 4 },
            { value: '3', text: 'Increased Radiance', next: 4 },
            { value: '4', text: 'Evenly Textured Skin', next: 4 },
            { value: '5', text: 'Even Consistency Skin', next: 4 },
        ],
        key: 's3',
        message: 'What is your main skincare goal?',
        answer: '<%=answer.s3%>'
    },
    4: {
        type: 'select',
        options: [
            { value: '1', text: '0-1 minute, once a day', next: () => 50 },
            { value: '2', text: '0-1 minute, twice a day', next: () => 50 },
            { value: '3', text: '1-2 minutes, once a day', next: () => 50 },
            { value: '4', text: '1-2 minutes, twice a day', next: () => 50 },
            { value: '5', text: '2+ minutes, twice a day', next: () => 50 },
        ],
        key: 's4',
        message: 'How much time do you spend on your skin daily?',
        answer: '<%=answer.s4%>'
    },

    // <-------------------------------------------------- STEP-1 -------------------------------------------------->
    11: {
        // STEP-1: Dry Skin Response
        type: 'text',
        message: '\
        You have told us your skin is dry so it is really important to keep it well hydrated, \
        protected and nourished with vitamins. A botanical moisturiser gives you the best of both worlds; \
        protecting skin from daily aggressors like the elements and ageing free radicals as well as reducing \
        moisture loss during the day and adding natural nourishment. Loaded with skin-loving vitamin E, \
        the algae in Face Moisturiser is a superb natural humectant, attracting nourishment like a magnet to increase \
        moisture levels. Laden with antioxidant vitamins B and C to boost collagen and fight pigmentation plus magnesium \
        and zinc to strengthen and protect a weak epidermis, algae helps maintain cell membranes too. \
        \n \
        To give thirsty skin an extra boost you may need to commit to using a treatment - around 3 times \
        a week is ideal. Loaded with botanical butters, Face Balm has been specially developed to nourish \
        and repair the skin’s upper layers as well as work deeper down to help ‘feed’ healthy new cells where \
        they are formed in the epidermis. With shea butter – a concentrated source of oleic essential fatty acid \
        to encourage skin regeneration - cocoa seed butter, which is rich in phytochemicals and forms a protective \
        barrier over fragile skin, plus ultra hydrating and smoothing hazelnut seed oil, it transforms dry skin overnight. \
        Increase its moisture-drenching capacity by applying using our ‘Skin’ergy self-massage’.',
    },
    12: {
        // STEP-1: Oily Skin Response
        type: 'text',
        message: '\
        You have indicated that your skin is oily and this skin type needs thorough cleansing, \
        gentle exfoliation, balancing ingredients and moisturisation to minimise shine and avoid breakouts. \
        Keeping it clean by cleansing twice daily is essential for oily complexions. \
        Our Face Wash uses botanical alkaline cleansers and natural coconut to thoroughly clean deep down, \
        banishing excess sebum, which can often build up around nose and chin to create blackheads, as well as \
        whisking away dead skin cells. \
        \n \
        Oily skin really benefits from gentle exfoliation. Exfoliating Polish contains detoxifying ginger essential oil, \
        which is rich in sesquiterpenes to prevent inflammation plus smoothing ginger threads to slough away impurities and \
        sebum build up. Anti-bacterial and antiseptic sweet orange reduces excess sebum and breakouts without disrupting \
        the skin’s delicate balance. Balancing essential oils are ideal for skin prone to oiliness; \
        products like our Facial Essence contain ylang ylang essential oil. Known to for its rebalancing properties to restore \
        the skin’s equilibrium, this soothing oil is loaded with potent anti-inflammatory, \
        anti-bacterial and antiseptic compounds such as linalool, geranyl and geraniol. Lemon verbena essence is also antibacterial \
        and anti-inflammatory making it ideal for treating blemishes. \
        \n \
        It’s a myth that oily skin doesn’t need moisturising; if you skip this step, skin will conversely become more oily in an \
        attempt to regulate itself. Use a light daily nourisher such as Face Moisturiser, which we find also has an amazing mattifying \
        effect making a superb base for makeup.',
    },
    13: {
        // STEP-1: Combination Skin Response
        type: 'text',
        message: '\
        You have informed us that your skin is combination so it’s key to care for both the dry and oily areas of your complexion. \
        This means sticking to a regular skincare routine, gentle exfoliation, moisturisation and using rebalancing ingredients. \
        This skin type needs gentle but consistent care to deal with an excess of oil in some areas and dry patches in another. \
        Regular cleansing is essential to help counteract an oily T-zone and nourish drier areas. Face Wash blends coconut fatty acids and \
        alkaline cleansers to deep clean so thoroughly that skin feels squeaky-clean and looks super bright. \
        This may take a few uses to get used to but believe us its balancing effects are incredible. Follow with Facial Essence; \
        it’s loaded with vitamin E rich hazelnut oil to nourish flaky areas plus rebalancing and antiseptic essential oils to counteract shine. \
        \n \
        Finish with a botanical nourisher to seal in goodness and protect daylong. Sea algae is amazing for drawing in moisture to dry areas; \
        find it in products like our Face Moisturiser which also helps regulate oiliness thanks to ylang ylang and lemon verbena essences. \
        Applying this rebalancing blend using our bespoke ‘Skin’ergy self-massage’ will help improve lymph flow, \
        detoxify congested areas and bring fresh supplies of nourishment and nutrients to drier zones. Once or twice a week use a \
        rebalancing treatment mask. Mix equal parts Face Balm with Exfoliating Polish to deeply nourish dry skin patches while \
        gently smoothing away a build up of pore-blocking dead skin cells and impurities for fresher, more even skin.',
    },
    14: {
        // STEP-1: Sensitive Skin Response
        type: 'text',
        message: '\
        You’ve clicked on sensitive skin, which needs gentle care, calming ingredients and strengthening treatments to soothe \
        irritation and help it become more resilient. A gentle approach is key for sensitive skin so avoid using anything \
        that’s harsh, even down to water that’s too hot as this can strip skin of its protective lipid layer aggravating sensitivity. \
        Products containing botanicals are the best way forward as they are closer to nature and therefore less likely to irritate \
        angry skin further. All our formulations are stringently dermatologically tested to be kind to skin and suitable for every skin type. \
        Essential oils containing calming compounds such as azulene in chamomile and anti-inflammatory lemon verbena in Face \
        Wash and Facial Essence really help soothe easily irritated skin types and ease redness. \
        \n \
        A weak epidermis means sensitive skin tends to be fragile, causing moisture to be lost and allowing potential irritants to penetrate. \
        Strengthening skin helps minimise adverse reactions to changes in temperature, hormone levels and stress so look for products featuring \
        restorative ingredients to help repair its natural barrier function. Rich in polyphenols to tighten, find regenerating magnesium and zinc \
        in the marine algae we use in Face Moisturiser. Daily use helps maintain cell membranes too for a calmer, more resilient complexion. \
        \n \
        You can really boost resilience and evenness with a soothing nighttime treatment. For softer, smoother and less irritated skin, \
        massage in Face Balm. Loaded with calming essentials oils and natural waxes like regenerating shea butter \
        (rich in essential fatty acids) and stabilising cocoa seed butter to soothe, its effects build up over time as skin \
        becomes stronger. Apply with our bespoke ‘Skin-ergy self-massage’ 3-4 times a week and you’ll \
        soon notice skin is smoother - and happier!',
    },
    15: {
        // STEP-1: Normal Skin Response
        type: 'text',
        message: '\
        You’re one of the lucky ones as you told us that your skin is normal but that’s not to say it doesn’t need TLC \
        to maintain – and optimise – its condition and help prevent damage. \
        This means a good daily skincare routine and a weekly treatment to boost radiance. \
        \n \
        Maintain good skin health with a regular routine. Begin by deep cleansing to remove impurities and \
        provide a receptive base for moisturisation. Follow with a botanical nourisher like \
        our algae-based Face Moisturiser. Rich in strengthening minerals like zinc and magnesium it offers \
        daylong protection and hydration. Laden with anti-oxidant essential oils to help fight ageing \
        free radicals, using Facial Essence under your moisturiser will increase your skin’s suppleness and radiance too. \
        Further boost its effects with simple facial massage that detoxifies skin of impurities that could lead \
        to blocked pores and blemishes and increases oxygen supply for a super-healthy glow. Our bespoke ‘Skin’ergy \
        self-massage’ application can be used with Facial Essence and Face Balm to intensity their effects and bring clarity to skin. \
        \n \
        Even normal skin needs regular exfoliation to help keep pores clear and speed up cellular renewal, \
        which decreases as we age. 2-3 times a week detoxify skin with Exfoliating Polish. \
        Containing stimulating ginger essential oils and dried threads it revitalises skin leaving it \
        velvety smooth and glowing. For a nighttime treat, 3 times a week replace Facial Essence with Face Balm \
        and use the re-energising ‘Skin’ergy’ application. You’ll wake up with skin that’s ultra-smooth \
        and soft – the perfect base for makeup.',
    },

    // <-------------------------------------------------- STEP-2 -------------------------------------------------->
    21: {
        // STEP-2: Uneven Textured Skin Reaction
        type: 'text',
        message: '\
        If uneveness is an issue, then open pores, fine lines and ‘bumpiness’ in general can be instantly \
        smoothed each morning with our ‘Skin’ergy self-massage’. Using this application technique when applying \
        Facial Essence helps to lift away flaky dead skin cells as well as strengthen the skin’s elastin and \
        collagen matrix by increasing blood, oxygen and nutrient flow to leave it looking and feeling smoother \
        and plumper overall. There’s more to it than application though. Essential fatty acids in the essence’s \
        hazelnut seed oil combine with the free radical scourging anti-oxidant behaviour of its 4 \
        potent essential oils to create the perfect environment for optimum skin cell growth and \
        renewal to ensure both a more even tone and texture.',
    },
    22: {
        // STEP-2: Breakouts Skin Reaction
        type: 'text',
        message: '\
        Deep cleansing is the first form of defence in keeping breakouts at bay. Face Wash leaves skin squeaky-clean, \
        refreshed and primed for application of spot-inhibiting ingredients like the antiseptic and anti-microbial \
        essential oils found in our Facial Essence and Face Moisturiser. Don’t worry; essential oils will not \
        add to the problem - they actually help improve the health of your skin’s environment while light nourishment \
        avoids skin producing additional sebum for moisturisation that could lead to spots. Regular exfoliation will also \
        keep dead skin cells and blocked pores to a minimum. Exfoliating Polish contains sesquiterpene-rich ginger to \
        prevent inflammation, detoxify and smooth. Use up to 3 times a week for clearer skin.',
    },
    23: {
        // STEP-2: Redness Skin Reaction
        type: 'text',
        message: '\
        Skin prone to redness generally indicates sensitivity so gentle handling is essential. \
        Avoid washing in water that’s too hot and choose products formulated with anti-inflammatory ingredients. \
        Facial Essence is loaded with soothing, calming essential oils including chamomile and lemon verbena; \
        massage into skin morning and night to reduce reactivity. Angry skin will really respond to an intensive, \
        calming treatment. 1-3 times a week at night, after cleansing, massage in the soothing, \
        healing and regenerative blend of waxes, butters and essential oils found in Face Balm to help \
        normalise and rebalance. Apply using the longer 5mins ‘Skin’ergy Treatment’ massage \
        for maximum soothing and healing benefits.',
    },
    24: {
        // STEP-2: Dullness Skin Reaction
        type: 'text',
        message: '\
        Lacklustre skin is usually the result of a build up of dead skin cells or a bout of illness, \
        stress or hormone fluctuations. For an instant ‘radiance fix’, start your day with a glow \
        by mixing equal parts Face Wash with Exfoliating Polish every other morning for a week. \
        The wash deep cleanses to shift any build up of skin dulling impurities while the polish uses \
        revitalising ginger essential oil and shreds to smooth away patches of dryness to reveal peachy soft, \
        glowing skin instead.',
    },
    25: {
        // STEP-2: Dehydration Skin Reaction
        type: 'text',
        message: '\
        Crank up the moisture factor to rehydrate thirsty skin. In addition to applying Facial Essence daily, \
        to help ‘draw in’ moisture, make sure you ‘seal in’ this goodness by applying a product like Face Moisturiser \
        on top (doing this increases the absorption of the oil by 20%). For very dehydrated complexions, \
        2-3 times a week try substituting Face Balm for your moisturiser in the morning for an intense \
        surge of hydration. At night, choose the blissful 5mins ‘Skin’ergy Treatment’ \
        application and you will really notice an improvement in moisture and suppleness.',
    },

    // <-------------------------------------------------- STEP-3 -------------------------------------------------->
    31: {
        // STEP-3: Main Goal - Regular Sebum Production & Reduced Blemishes Response
        type: 'text',
        message: '\
        If your main goal is to regulate sebum production and reduce blemishes look for products containing \
        oil-reducing botanicals. Gentle is the best way forward as over-oily skin is exacerbated by \
        an aggressive approach. Facial massage improves oxygen and lymph flow to ensure skin cells have \
        all they need to function optimally; it also detoxifies to rid skin of unwanted sebum and general \
        detritus that could block pores and increase the likelihood of spots. Use ‘Skin-ergy’ \
        to apply Facial Essence, a potent blend of anti-oxidant, antiseptic and anti-inflammatory \
        essential oils to rebalance skin and normalise sebum production for a fresher, smoother complexion. \
        Keep skin really clean too. Our Face Wash – with gently cleansing natural coconut and anti-microbial \
        essential oils - leaves skin squeaky-clean and perfectly prepped for maximum absorption of the essence.',
    },
    32: {
        // STEP-3: Main Goal - Nourished & Hydrated Skin
        type: 'text',
        message: '\
        In addition to drinking water, water and more water, the secret to boosting hydration levels lies in \
        rich butters and nourishing oils. For a moisture-boosting treatment mask, mix equal parts \
        Face Balm with Face Moisturiser, massage all over face, neck and décolletage then relax for 5-10 mins. \
        Smooth away any excess with a damp cotton cloth or flannel for velvety soft, plump and balanced skin. \
        For an extra moisture surge in the morning, try mixing 2/3 Face Wash with 1/3 Face Balm \
        for deep cleanse that also deeply nourishes.',
    },
    33: {
        // STEP-3: Main Goal - Increased Radiance
        type: 'text',
        message: '\
        Skin renews completely every 20-40 days but this rate slows as we age. \
        You can speed it up and boost natural radiance with regular exfoliation. \
        For a smoothing mask that’s also a deeply nourishing treatment, mix ¼ Face Balm with ¾ Exfoliating \
        Polish and leave for 5mins before wiping away any excess. Hydration levels will be topped up and \
        the skin’s outer layers smoothed for a peachy, glowy finish. Regular facial \
        massage will also improve oxygen and lymph flow to bring freshness and vitality \
        to skin so ensure you incorporate this daily into your routine when you apply Facial \
        Essence under your moisturiser.',
    },
    34: {
        // STEP-3: Main Goal - Evenly Textured Skin
        type: 'text',
        message: '\
        Uneven skin texture is usually due to an excess of dead skin cells, which can make it feel \
        bumpy or rough and look dull. Weekly or twice weekly exfoliation is key to a smooth, even complexion. \
        Choose one that naturally detoxifies and regenerates like Exfoliating Polish. With orange, \
        ginger and pomegranate exfoliants in a coconut oil base it gently smooths away dead skin cells \
        and evens out dry patches for a silky softness. Additional hydration will also help to plump up \
        any over-dry areas and improve evenness so swap Facial Essence for Face Balm twice weekly. \
        Use the vitalising ‘Skin’ergy self-massage’ application for maximum product absorption and firmness.',
    },
    35: {
        // STEP-3: Main Goal - Even Consistency Skin
        type: 'text',
        message: '\
        If your main aim is to improve an uneven skin tone, always begin with thorough cleansing; \
        it’s the foundation of healthy, clear skin. Aside from good nutrition in your diet, \
        essential fatty acids and minerals on your skin will also help even out patches of colour or tone. \
        Hazelnut seed oil is loaded with them as well as skin-saving vitamins A, C and E. \
        Vitamin E is a particularly powerful anti-oxidant helping to neutralise free radicals and counter \
        age and sun-related pigmentation. Find it in Facial Essence and Face Balm. \
        By applying these products using our ‘Skin’ergy self-massage’ you’ll also increase oxygen and \
        nutrient supply and boost detoxification for healthier skin cells and a more even tone.',
    },

    // <-------------------------------------------------- STEP-4 -------------------------------------------------->
    41: {
        // STEP-4: 0-1 mins once response
        type: 'text',
        message: '\
        Even if you are very short on time you can make a difference to your skin’s quality and tone. \
        Concentrate on the basics by making sure skin is clean and protected each morning. \
        Face Wash is super-quick and ultra-effective; put a small amount into the palm of your hand, \
        add a few drops of water to lather and massage in for a stimulating, skin brightening cleanse. \
        Then smooth a few drops of Facial Essence over face and neck; your skin will be ideally primed \
        to absorb its hydrating, rebalancing goodness. Finish with Face Moisturiser for an additional \
        layer of nourishment that protects against the elements, pollution and moisture loss. \
        Using Facial Essence first will boost its effectiveness by 20%. We hope you will find \
        this a great route into the many benefits of slow, for better skin in 30 days… \
        even if you only have a minute a day to spare!',
    },
    42: {
        // STEP-4: 0-1 mins twice response
        type: 'text',
        message: '\
        If time is tight, at least make sure skin is cleansed and protected morning and night; \
        this will make a big difference to its condition and radiance. Ultra-quick and super-effective, \
        put a small amount of Face Wash into the palm of your hand, lather using a few drops \
        of water then massage into face and neck before smoothing away with warm water or a flannel. \
        Your skin will be perfectly primed to absorb the revitalising anti-oxidant goodness of Facial \
        Essence before finishing with a protective layer of Face Moisturiser. \
        At night simply switch the essence and moisturiser for Face Balm 1-3 times a week. \
        Speedy steps to better skin… in almost no time.',
    },
    43: {
        // STEP-4: 1-2 mins once response
        type: 'text',
        message: '\
        By the time it takes to brush your teeth you can deep cleanse for healthier skin, \
        protect it against damage and stimulate healthy new cell growth for a radiant glow. \
        Use Face Wash to thoroughly cleanse skin of impurities then apply Facial Essence using \
        our 60 second ‘Skin’ergy Express’ application to boost microcirculation and exercise facial muscles. \
        Then apply a botanical hydrator like Face Moisturiser to help ‘seal in’ the \
        nourishment and anti-oxidant goodness for soft, protected skin daylong. Easy as I, 2, 3.',
    },
    44: {
        // STEP-4: 1-2 mins twice response
        type: 'text',
        message: '\
        For this amount of time you’ll easily be able to thoroughly cleanse skin, \
        give it a protective moisture surge and encourage healthy new skin cells for a glowing complexion. \
        Morning and night use Face Wash to deeply cleanse and prep skin for the application \
        anti-oxidant laden Facial Essence. Apply this rebalancing blend with our 60 second \
        ‘Skin’ergy Express’ self-massage to increase lymph and oxygen flow and encourage maximum \
        product absorption. Finish with a softening skin nourisher to ‘seal in’ these vital oils: \
        Face Moisturiser in the morning and Face Balm 1-3 times a week at night. \
        Two mins (or less!) to smoother, re-energised and radiant looking skin.',
    },
    45: {
        // STEP-4: 2+ mins twice Response
        type: 'text',
        message: '\
        This gives you ample time to really rebalance and re-energise your complexion for smoother, \
        brighter skin. Always begin by deep cleansing using Face Wash; skin will be left squeaky-clean, \
        which may take a few days to get used to but you’ll soon be hooked! \
        Skin is now perfectly primed for absorbing Facial Essence – a potent blend of \
        anti-oxidant essential oils and nourishers. Apply with the ‘Skin’ergy self-massage’ \
        of your choice then smooth over Face Moisturiser to protect and smooth all day. \
        At night take the time to give skin a really intensive boost by spending 5mins on our \
        ‘Skin’ergy Treatment’ application. Feels blissful, aids sleep, leaves skin peachy soft. ',
    },

    50: {
        type: 'text',
        message: '',
        next: 75
    },
    70: {
        type: 'confirm',
        message: 'Do you want to save recommendation?',
        yes: {
            answer: 'Yes',
            next: 71
        },
        no: {
            answer: 'No',
            next: 75
        }
    },
    71: {
        type: 'text',
        message: '',
        next: ()=>{
        $('#mailmunchHolder').click();
        return 75;
        },
   
    },
    75: {
        type: 'confirm',
        message: 'Do you want to see your personal skin recommendation?',
        yes: {
            answer: 'Yes',
            next: 80
        },
        no: {
            answer: 'I\'ll try again',
            next: 1
        }
    },
    80: {
        type: 'redirect',
        url: 'recommendation.html', // OmID ---> new line for final customer recommendation
        next: null
    }
}


class Question {
    constructor(settings, app) {
        this.settings = settings
        this.app = app;
        this.callback = null;
    }
    tpl_render(str) {
        let keys = Object.keys(this.app.answers);
        if(keys.length > 0){
            let lastKey = keys[keys.length - 1];
            if(lastKey !== temp){
                let questionNum = lastKey.replace('s','');
                if(questionNum !== 'email' && questionNum !== 'name'){
                    let answerNum = Questions[+questionNum].options.find(x=>x.text === this.app.answers[lastKey]).value;
                    let thisRes = Questions[questionNum + answerNum]['message'];
                    res.push(thisRes)
                    temp = lastKey;
                }
            }
        }
 
        var fn = new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +
            "with(obj){p.push('" +
            str.replace(/[\r\t\n]/g, " ")
                .replace(/'(?=[^%]*%>)/g, "\t")
                .split("'").join("\\'")
                .split("\t").join("'")
                .replace(/<%=(.+?)%>/g, "',$1,'")
                .split("<%").join("');")
                .split("%>").join("p.push('")
            + "');}return p.join('');");
        return fn({ state: this.app.state, answer: this.app.answers });
    }
    render_message(tpl, cls) {
        let $message,message;
        if(this.tpl_render(tpl) === "******"){
            message = this.tpl_render(tpl);
            $message = $(`<div class='${cls}'><span class='hvr-wobble-horizontal'>${res}</span></div>`);
        }
        else{
            message = this.tpl_render(tpl);
            $message = $(`<div class='${cls}'><span class='hvr-wobble-horizontal'>${message}</span></div>`);
        }

        this.app.$messages.append($message);
        this.app.popup.scroll_down();
    }
    render_question() {
        throw Error('render_question')
    }
    render_answer() {
        throw Error('render_answer')
    }
    render_ctrl() {
        throw Error('render_ctrl')
    }
    render() {
        this.app.$ctrl.empty().attr('rel', this.constructor.name);
        this.render_question()
        this.render_ctrl()
        setTimeout(() => {
            this.app.popup.scroll_down();
        }, 1000);

    }
    resolve(next_id) {
        this.app.next_id = next_id;
        this.render_answer()
        setTimeout(() => {
            this.app.render()
        }, 1000);
    }
    get_next(next) {
        let _next = next ? next : this.settings.next;
        return typeof _next === "function" ? _next() : _next;
    }
}


class TextQuestion extends Question {
    constructor(settings, app) {
        super(settings, app)
    }
    render_question() {
        if( this.settings.message === "******"){
            this.settings.message = res.join('<br><br>');
        }
        this.settings.message &&
            this.render_message(this.settings.message, 'message message__question')
    }
    render_answer() {
        this.settings.answer &&
            this.render_message(this.settings.answer, 'message message__answer')
    }
    render_ctrl() {
        this.resolve(this.get_next())
    }
}


class InputQuestion extends TextQuestion {
    constructor(settings, app) {
        super(settings, app)

        this.$input = $("<input type='text' />")
        this.$btn = $("<button class='consultant__btn consultant__btn_submit'>Send</button>")
        this.$ctrl = $("<div class='ctrl ctrl--input'></div>").append(this.$input, this.$btn)

        this.$input.on('keyup', (e) => {
            var keyCode = e.keyCode || e.which;
            if (keyCode == '13') {
                return this.submit();
            }
        })

        this.$btn.click(() => this.submit())
    }
    submit() {
        var value = this.$input.val(),
            key = this.settings.key;

        this.app.state[key] = value;
        this.app.answers[key] = value;

        this.resolve(this.get_next());
        return false;
    }
    render_ctrl() {
        this.app.$ctrl.append(this.$ctrl)
        this.$input.focus();
    }
}


class InputEmail extends TextQuestion {
    constructor(settings, app) {
        super(settings, app)

        // this.$form = $("#mailmunchHolder");
        $("#mailmunchHolder iframe").each(function() {
            var div = document.createElement('div'),
                rel = this.nextSibling, par = this.parentNode;
            div.appendChild(this); // the iframe
            par.insertBefore(div,rel);
            this.$form.appendChild(div);
        });
        $("#mailmunchHolder").css('display','block');
        this.$ctrl = $("<div class='ctrl mail--ctrl'></div>").append(this.$form)

    }
    render_ctrl() {
        this.app.$ctrl.append(this.$ctrl)
    }
}


class ConfirmQuestion extends TextQuestion {
    constructor(settings, app) {
        super(settings, app)

        this.$btn_yes = $("<button  class='consultant__btn consultant__btn_confirm consultant__btn_yes'>Yes</button>")
        this.$btn_no = $("<button class='consultant__btn consultant__btn_confirm consultant__btn_no'>Start Again</button>")
        this.$ctrl = $("<div class='ctrl ctrl--confirm'></div>").append(this.$btn_yes, this.$btn_no)

        this.$btn_yes.click(() => {
            this.settings = this.settings.yes;
            this.resolve(this.get_next());
            return false
        })
        this.$btn_no.click(() => {
            this.settings = this.settings.no;
            this.resolve(this.get_next());
            return false
        })
    }
    render_ctrl() {
        this.app.$ctrl.append(this.$ctrl)
    }
}


class SelectQuestion extends TextQuestion {
    constructor(settings, app) {
        super(settings, app)
        this.init()
    }
    init() {
        this.build('ctrl ctrl--select')
    }
    check_condition(option) {
        if (!option.condition) {
            return true
        } else {
            try {
                for (let key in option.condition) {
                    if (this.app.state[key] == undefined || this.app.state[key] != option.condition[key])
                        throw Error("Condition")
                }
            } catch (e) {
                return false
            }
            return true
        }
    }
    build(ctrl_cls) {
        this.$ctrl = $("<div/>").addClass(ctrl_cls);
        this.settings.options.filter(option => this.check_condition(option)).map(option => {

            let text = this.tpl_render(option.text || option.value)
            let $option = $(`<div class='ctrl__option'>${text}</div>`)
            let key = this.settings.key;
            let option_value = option.value;
            let option_text = option.text;
            let option_next = option.next;

            $option.click(() => {
                this.app.state[key] = option_value;
                this.app.answers[key] = (option_text == undefined ? option_value : option_text);
                this.resolve(this.get_next(option_next));
                return false
            })

            this.$ctrl.append($option)
        })
    }
    render_ctrl() {
        this.app.$ctrl.append(this.$ctrl)
    }
}


class SelectImage extends SelectQuestion {
    constructor(settings, app) {
        super(settings, app)
    }
    init() {
        this.build('ctrl ctrl--select-image')
    }
}


class SelectVertical extends SelectQuestion {
    constructor(settings, app) {
        super(settings, app)
    }
    init() {
        this.build('ctrl ctrl--select-vertical')
    }
}


class Redirect extends TextQuestion {
    constructor(settings, app) {
        super(settings, app)
    }
    render_ctrl() {
        let href = this.tpl_render(this.settings.url);
        setTimeout(() => {
            window.location.href = href;
        }, this.settings.timeout || 3000);
    }
}

const Types = {
    text: TextQuestion,
    input: InputQuestion,
    email: InputEmail,
    select: SelectQuestion,
    select_image: SelectImage,
    select_vertical: SelectVertical,
    redirect: Redirect,
    confirm: ConfirmQuestion
}

let result;
class App {
    constructor(popup) {
        this.popup = popup
        this.$messages = popup.$messages;
        this.$ctrl = popup.$ctrl;

        this.state = {};
        this.answers = {};

        this.next_id = 0
    }
    get not_inited() {
        return this.next_id === 0;
    }
    next() {
        let settings = Questions[this.next_id];
        let cls = Types[settings.type];
        return settings ? new cls(settings, this) : null;
    }
    clean() {
    }
    render(delay) {
        let next = this.next()
        // var res = next.settings.message;
        if (next.settings.next === 75) localStorage.setItem('result', JSON.stringify(res));
        if (next.settings.next === 80) window.location.href = 'recommendation.html';

        next && next.render(delay)
    }
}


class Popup {
    constructor($body, $wrap, $layout, $container, $close) {
        this.$body = $body;
        this.$wrap = $wrap;
        this.$layout = $layout;
        this.$container = $container;
        this.$close = $close;
        this.$wrap.html(this.$layout.html(this.$container.append(this.$close)));

        this.$messages = $("<div/>").addClass('consultant__messages');
        this.$ctrl = $("<div/>").addClass('consultant__ctrl');

        this.$container.append(this.$messages, this.$ctrl)

        this.$close.click(() => this.close())
        this.$layout.click(() => this.close())
        this.$container.click(() => false)
    }
    scroll_down() {
        let node = this.$messages.get(0),
            fromValue = node.scrollTop,
            toValue = node.scrollHeight,
            delta = node.scrollHeight - node.scrollTop,
            increment = delta / 60,
            step = (newTimestamp) => {
                if (((node.scrollTop + node.clientHeight + 1) - node.scrollHeight) > 0) return;
                node.scrollTop += increment;
                window.requestAnimationFrame(step);
            }
        window.requestAnimationFrame(step);
    }
    __on_close() {
        this.$wrap.removeClass('opened');
        setTimeout(() => {
            this.$wrap.detach();
        }, 1000);
    }
    __on_open() {
        this.$body.append(this.$wrap);
        this.scroll_down();

        setTimeout(() => {
            this.$wrap.addClass('opened');

        }, 1000);
    }
    open(event) {
        this.__on_open(event);
        return false;
    }
    close(event) {
        this.__on_close(event);
        return false;
    }
    on_open(func) {
        let __chain = this.__on_open.bind(this);
        this.__on_open = (event) => func(__chain(event))
    }
    on_close(func) {
        let __chain = this.__on_close.bind(this);
        this.__on_close = (event) => func(__chain(event))
    }
}


!(function (window, document, $) {

    $(document).ready(() => {

        const popup = new Popup(
            $(document.body),
            $('<div class="consultant  consultant__container"/>'),
            $('<div class="consultant__layout"/>'),
            $('<div class="consultant__popup"/>'),
            $('<div class="consultant__close"/>'),
        ),
            app = new App(popup);

        var btnOpen = $('.consultant__btn_general');

        btnOpen.on('click', (event) => popup.open(event));

        popup.on_close(() => {
            btnOpen.removeClass('consultant__btn_disabled');
            setTimeout(() => {
                app.clean();
            }, 1000);
        })
        popup.on_open(() => {
            btnOpen.addClass('consultant__btn_disabled')
            app.not_inited && setTimeout(() => {
                app.render();
            }, 3000);
        })
    })

})(window, document, jQuery)
