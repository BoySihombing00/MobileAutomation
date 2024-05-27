import { expect } from '@wdio/globals'

describe('My Login application', () => {
    it('TC_01_Valid_login', async () => {
    const titikTiga = $('//android.widget.ImageView[@content-desc="View menu"]');
    await titikTiga.click();
    const menuLogin = $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Log In"]');
    await menuLogin.click();
    const username = $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
    await username.setValue('bob@example.com');
    const password = $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]');
    await password.setValue('10203040');
    const loginButton = $('//android.widget.Button[@content-desc="Tap to login with given credentials"]');
    await loginButton.click();
    const verifySuccess = $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/productTV"]');
    await expect(verifySuccess).toBeDisplayed();
    })
    it('TC_02_Invalid_Login', async () => {
        const titikTiga = $('//android.widget.ImageView[@content-desc="View menu"]');
        await titikTiga.click();
        const menuLogin = $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Log In"]');
        await menuLogin.click();
        const username = $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]');
        await username.setValue('alice@example.com');
        const password = $('//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/passwordET"]');
        await password.setValue('10203040');
        const loginButton = $('//android.widget.Button[@content-desc="Tap to login with given credentials"]');
        await loginButton.click();
        const verifySuccess = $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/passwordErrorTV"]');
        await expect(verifySuccess).toBeDisplayed();
        })
})

