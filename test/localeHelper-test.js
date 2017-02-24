var localeHelper = new (require('../lib/localeHelper.js'));
var expect = require("chai").expect;

describe("### Locale helper", function () {

    it("should find by filter", function(){
        var locales = localeHelper.findByFilter("core");
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].filters.contains("core")).to.equal(true);
        }
    });

    it("should get Synotypic", function(){
        var locales = localeHelper.getSynotypic();
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].synotypic).to.equal(true);
        }
    });

    it("find by NameForm", function(){
        var locales = localeHelper.findByNameForm("zh-Hani");
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].nameForm.contains("zh-Hani")).to.equal(true);
        }
    });

    it("find by locale", function(){
        var locales = localeHelper.findByLocale("zh-hans");
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].locale.contains("zh-hans")).to.equal(true);
        }
    });

    it("find by browserCode", function(){
        var locales = localeHelper.findByBrowserCode("zh-CN");
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].browserCode.contains("zh-CN")).to.equal(true);
        }
    });

    it("get Transliteration", function(){
        var locales = localeHelper.getTransliteration();
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].transliteration).to.equal(true);
        }
    });

    it("locale Has Transliteration true", function(){
        var transliteration = localeHelper.localeHasTransliteration("ja");
        expect(transliteration).to.equal(true);
    });

    it("locale Has Transliteration false", function(){
        var transliteration = localeHelper.localeHasTransliteration("en");
        expect(transliteration).to.equal(false);
    });

    it("name Form Is Synotipic true", function(){
        var isSynotipic = localeHelper.nameFormIsSynotipic("zh-Hani");
        expect(isSynotipic).to.equal(true);
    });

    it("name Form Is Synotipic false", function(){
        var isSynotipic = localeHelper.nameFormIsSynotipic("en");
        expect(isSynotipic).to.equal(false);
    });

    it("locale Is Synotipic true", function(){
        var isSynotipic = localeHelper.localeIsSynotipic("zh-hans");
        expect(isSynotipic).to.equal(true);
    });

    it("locale Is Synotipic false", function(){
        var isSynotipic = localeHelper.localeIsSynotipic("en");
        expect(isSynotipic).to.equal(false);
    });

    it("get languages query filters", function(){
        var locales = localeHelper.getLanguages(
            {
                filters: ["core"]
            }
        );
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].filters.contains("core")).to.equal(true);
        }
    });

    it("get languages query multi filters finds both lists", function(){
        var found1, found2;
        var locales = localeHelper.getLanguages(
            {
                filters: ["A", "G1"]
            }
        );
        for (var i = 0; i < locales.length; i++) {
            if(locales[i].filters.contains("A")) {
                found1 = true;
            }
            else if(locales[i].filters.contains("G1")) {
                found2 = true;
            }
        }
        expect(found1 && found2).to.equal(true);
    });

    it("get languages query multi locale finds both", function(){
        var found1, found2;
        var locales = localeHelper.getLanguages(
            {
                locale: ["en", "es"]
            }
        );
        for (var i = 0; i < locales.length; i++) {
            if(locales[i].locale.contains("en")) {
                found1 = true;
            }
            else if(locales[i].locale.contains("es")) {
                found2 = true;
            }
        }
        expect(found1 && found2).to.equal(true);
    });

    it("get languages query multi nameForm finds both lists", function(){
        var found1, found2;
        var locales = localeHelper.getLanguages(
            {
                nameForm: ["zh-Hani", "ja"]
            }
        );
        for (var i = 0; i < locales.length; i++) {
            if(locales[i].nameForm.contains("zh-Hani")) {
                found1 = true;
            }
            else if(locales[i].nameForm.contains("ja")) {
                found2 = true;
            }
        }
        expect(found1 && found2).to.equal(true);
    });

    it("get languages query multi browserCode finds both lists", function(){
        var found1, found2;
        var locales = localeHelper.getLanguages(
            {
                browserCode: ["zh-CN", "ja"]
            }
        );
        for (var i = 0; i < locales.length; i++) {
            if(locales[i].browserCode.contains("zh-CN")) {
                found1 = true;
            }
            else if(locales[i].browserCode.contains("ja")) {
                found2 = true;
            }
        }
        expect(found1 && found2).to.equal(true);
    });

    it("get languages query transliteration", function(){
        var locales = localeHelper.getLanguages(
            {
                transliteration: true
            }
        );
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].transliteration).to.equal(true);
        }
    });

    it("get languages query synotypic", function(){
        var locales = localeHelper.getLanguages(
            {
                synotypic: true
            }
        );
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].synotypic).to.equal(true);
        }
    });

    it("get languages query multi query params", function(){
        var locales = localeHelper.getLanguages(
            {
                filters: ["core"],
                synotypic: true
            }
        );
        for (var i = 0; i < locales.length; i++) {
            expect(locales[i].filters.contains("core")).to.equal(true);
            expect(locales[i].transliteration).to.equal(true);
        }
    });
});