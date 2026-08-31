// Simple toast stub for notifications
export const toast = {
  promise: async (
    promise: Promise<any>,
    messages: {
      loading: string;
      success: (data: any) => string;
      error: (error: any) => string;
    }
  ) => {
    try {
      console.log(messages.loading);
      const result = await promise;
      const successMsg = messages.success(result);
      console.log(successMsg);
      return result;
    } catch (error) {
      const errorMsg = messages.error(error);
      console.error(errorMsg);
      throw error;
    }
  },
  success: (message: string) => console.log(message),
  error: (message: string) => console.error(message),
  info: (message: string) => console.info(message),
  warning: (message: string) => console.warn(message),
};
