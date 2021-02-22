<template>
    <section class="login">
        <div class="login_logo">
            <img src="@/assets/wx_logo.png" alt />
            <!-- to="feedback" -->
            <!-- <van-button type="info" class="login_btn" to="feedback" @click="handleComplaint">我要举报</van-button> -->
        </div>
        <van-dialog
            v-model="show"
            title="本平台温馨提示"
            confirm-button-text="同 意"
            :message="tips"
            message-align="left"
            @confirm="handleConfirm"
        ></van-dialog>
    </section>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            tips: `
            <div style="text-indent: 2em;">“阳光”是最好的防腐剂。通过反舞弊宣贯与学习让员工及合作客户了解舞弊的危害，组织员工自查与自纠、反思与自省，树立阳光心态。本着自愿原则引导员工对自身舞弊问题进行申报，公司会对其申报内容给予保密。</div>
            <div style="text-indent: 2em;">对自身存在舞弊问题，在申报期内主动申报的，公司可根据实际情况给予宽大处理，不影响未来的职业发展；凡不主动申报者，后期一经查实一律解聘，触犯法律的移送司法机关处理。</div>
            `,
        };
    },
    methods: {
        // handleComplaint() {
        //     this.$router.push({
        //         name: `feedback`,
        //         params: {
        //             flag: 'add',
        //         },
        //     });
        // },
        handleConfirm() {
            this.$router.push('/feedback');
        },
    },
};
</script>

<style scoped>
.login_logo {
    width: 100%;
    height: 1332px;
    display: flex;
    justify-content: center;
}
.login_logo img {
    width: 350px;
    height: 95px;
    margin-top: 133px;
}
.login_logo .login_btn {
    width: 580px;
    height: 100px;
    margin-top: 478px;
    font-size: 32px;
    position: absolute;
}
.login_dialog {
    width: 560px;
    height: 660px;
    font-size: 28px;
}
</style>
<style>
.login_dialog .van-dialog__header {
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 32px;
    border-bottom: 1px solid #dcd9d9;
}
.login_dialog p {
    padding: 0 25px 0 25px;
}
.login .van-dialog__message {
    white-space: pre-line;
    padding: 24px 48px 0 48px;
}
</style>
