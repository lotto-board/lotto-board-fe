import { getCurrentInstance, onUnmounted } from "vue";

export function useLoading() {
    const instance = getCurrentInstance();
    let loader;

    const showLoading = (options = {
        width: 75,
        height: 75,
        canCancel: false,
        isFullPage: false,
        color: '#03075e',
    }) => {
        loader = instance?.proxy?.$loading.show({
            ...options,
        });
    };

    const hideLoading = () => {
        loader && loader.hide();
    };

    onUnmounted(() => {
        hideLoading();
    });

    return { showLoading, hideLoading };
}