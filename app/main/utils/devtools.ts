import { BrowserWindow, GlobalShortcut } from 'electron';

// 快捷键注册
export function registryShortcut(globalShortcut:GlobalShortcut,win:BrowserWindow) {
  globalShortcut.register('CommandOrControl+J+K', () => {
    // 获取当前窗口
    win.webContents.openDevTools();
  });
}