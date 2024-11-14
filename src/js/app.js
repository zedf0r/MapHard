export class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
    ])
  }

  settingSet(keys, values) {
    keys.forEach(key => {
      if (this.defaultSettings.has(key)) {
        const validValues = this.defaultSettings.get(key);
        values.forEach(value => {
          if (validValues.includes(value)) {
            return this.defaultSettings.set(key, value)
          }
        })
      }
    })
    return this.defaultSettings
  }

  settingGet() {
    return Array.from(this.defaultSettings)
  }
}