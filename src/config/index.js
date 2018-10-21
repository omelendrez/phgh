const config = {
  main: [
    {
      fieldName: 'appActive',
      title: 'Aplication Active',
      subtitle: "Here is were you can put the application Offline.",
      type: 'switch',
      value: true
    },
    {
      fieldName: 'appFrozen',
      title: 'Application freeze',
      subtitle: "This will freeze the application until unfrozen.",
      type: 'switch',
      value: false
    },
    {
      fieldName: 'requireIDCards',
      title: 'Upload ID cards to verify clients',
      subtitle: 'This switch makes mandatory the uploade ID cards for account confirmation.',
      type: 'switch',
      value: false
    },
    {
      fieldName: 'requireBankStatements',
      title: 'Upload bank statement to verify user accounts',
      subtitle: 'This switch makes mandatory upload bank statement for account verification',
      type: 'switch',
      value: true
    },
    {
      fieldName: 'daysToBlock',
      title: 'Blocked users tickets',
      subtitle: 'Limit of days a blocked user should be ticketed.',
      type: 'text',
      suffix: 'Days',
      fieldType: 'number',
      min: 1,
      value: 4
    }
  ],
  ph: [
    {
      fieldName: 'minPHAmount',
      title: 'Minimum PH',
      subtitle: 'Minimum amount for a PH.',
      type: 'text',
      suffix: 'NGN',
      fieldType: 'number',
      value: 5000
    },
    {
      fieldName: 'maxPHAmount',
      title: 'Maximum PH',
      subtitle: 'Maximum amount for a PH.',
      type: 'text',
      suffix: 'NGN',
      fieldType: 'number',
      value: 500000
    },
    {
      fieldName: 'percentGrowth',
      title: 'Growth Percent',
      subtitle: 'Precentage of daily growth.',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      value: 1
    },
    {
      fieldName: 'percentGrowthRecommiemt',
      title: 'Growth Percent Recommitment',
      subtitle: 'Precentage of daily growth for recommitments.',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      value: 1
    },
    {
      fieldName: 'adminsPercent',
      title: 'Percent for Admins',
      subtitle: 'Percent to be paid to admins.',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 1,
      value: 5
    },
    {
      fieldName: 'adminsPayHoursLimit',
      title: 'Time limit to pay admins',
      subtitle: 'Time limit for payment to admins.',
      type: 'text',
      suffix: 'Hours',
      fieldType: 'number',
      min: 1,
      value: 48
    },
    {
      fieldName: 'allowCash',
      title: 'Allow cash',
      subtitle: 'Allow PH to be made in cash',
      type: 'switch',
      value: true
    },
    {
      fieldName: 'allowBitcoins',
      title: 'Allow bitcoins',
      subtitle: 'Allow PH to be made with bitcoins',
      type: 'switch',
      value: true
    },
    {
      fieldName: 'allowMultiplePH',
      title: 'Allow multiple PH',
      subtitle: 'Allow user to make more than 1 PH',
      type: 'switch',
      value: true
    },
    {
      fieldName: 'messageToPH',
      title: 'Message to PH',
      subtitle: 'Text to be sent to the PH when is time to pay.',
      type: 'text',
      fieldType: 'text',
      value: 'You have an order please make payment'
    }
  ],
  gh: [
    {
      fieldName: 'daysLimitToRecommit',
      title: 'Days PH to payback',
      subtitle: 'Number of days to PH back after GH.',
      type: 'text',
      suffix: 'Days',
      fieldType: 'number',
      min: 1,
      value: 4
    },
    {
      fieldName: 'recommitPercent',
      title: 'Percent for recommits',
      subtitle: 'Percentage to recommit before GH',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 0,
      value: 10
    },
    {
      fieldName: 'bonusRecommitPercent',
      title: 'Bonus percent to recommit',
      subtitle: 'Percentage of bonus to recommit before bonus GH',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 0,
      value: 50
    },
    {
      fieldName: 'daysToRelease',
      title: 'Release days',
      subtitle: 'Number of days release shall be made after payment confirmed',
      type: 'text',
      suffix: 'days',
      fieldType: 'number',
      min: 0,
      value: 30
    },
    {
      fieldName: 'messageToGH',
      title: 'Message to GH',
      subtitle: 'Text to be sent to the GH payment by PH is done.',
      type: 'text',
      fieldType: 'text',
      value: 'You have a paid order please confirm'
    }
  ],
  finance: [
    {
      fieldName: 'daysForGrowth',
      title: 'Limit days of amount growth',
      subtitle: 'Setting limit of days for growth.',
      type: 'text',
      suffix: 'Days',
      fieldType: 'number',
      min: 1,
      value: 30
    },
    {
      fieldName: 'directReferralBonusPercent',
      title: 'Initial direct referral bonus percent',
      subtitle: 'Percent of direct referral bonus for first time',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 0,
      value: 10
    },
    {
      fieldName: 'numberOfReferralsForBonus',
      title: 'Referrals for bonus',
      subtitle: 'Number of direct referrals to be entitled to be a Guider/Leader',
      type: 'text',
      fieldType: 'number',
      min: 1,
      value: 50
    },
    {
      fieldName: 'level2ReferralBonusPercent',
      title: 'Level 2 referral bonus',
      subtitle: 'Percent of 2nd level referral bonus',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 0,
      value: 2
    },
    {
      fieldName: 'level3ReferralBonusPercent',
      title: 'Level 3 referral bonus',
      subtitle: 'Percent of 3rd level referral bonus',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 0,
      value: 1.5
    },
    {
      fieldName: 'nextLevelsReferralBonusPercent',
      title: 'Next levels referral bonus',
      subtitle: 'Percent for next of level referral bonus',
      type: 'text',
      suffix: '%',
      fieldType: 'number',
      min: 0,
      value: 0.5
    },
    {
      fieldName: 'automaticMatching',
      title: 'Automatic matching ',
      subtitle: 'Payment matching is done by the system',
      type: 'switch',
      value: true
    },
    {
      fieldName: 'manualMatching',
      title: 'Manual matching',
      subtitle: 'Payment matching is done by the Admins',
      type: 'switch',
      value: false
    },
    {
      fieldName: 'mixedMatching',
      title: 'Automatic & manual matching',
      subtitle: 'Payment done automatic and by Admins',
      type: 'switch',
      value: false
    },
    {
      fieldName: 'showAmountsInDashboard',
      title: 'Show total amounts in dashboard',
      subtitle: 'This allows the Admins to block the totals from the dashboard',
      type: 'switch',
      value: true
    }
  ]
}


export default config
