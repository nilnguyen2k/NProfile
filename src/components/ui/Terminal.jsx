import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks';

/**
 * Each step is a command the "user" types, followed by the output lines it prints.
 * Output lines are arrays of [text, tone] segments so parts can be colored.
 */
const SESSION = [
  {
    command: 'whoami',
    output: [
      [['nil-nguyen', 'accent'], [' · DevOps Engineer @ PTN Global', 'muted']],
    ],
  },
  {
    command: 'kubectl get skills -n devops',
    output: [
      [['NAME            STATUS    CLOUD', 'muted']],
      [['terraform       ', 'base'], ['Running', 'ok'], ['   aws,azure', 'base']],
      [['kubernetes      ', 'base'], ['Running', 'ok'], ['   eks,aks', 'base']],
      [['istio-gateway   ', 'base'], ['Running', 'ok'], ['   eks', 'base']],
      [['ci-cd           ', 'base'], ['Running', 'ok'], ['   jenkins,gha,gitlab', 'base']],
      [['observability   ', 'base'], ['Running', 'ok'], ['   prometheus,grafana', 'base']],
    ],
  },
  {
    command: 'terraform apply -auto-approve',
    output: [
      [['Apply complete! ', 'ok'], ['Infra is now code.', 'base']],
    ],
  },
  {
    command: 'cat status.txt',
    output: [
      [['● ', 'ok'], ['Open to new opportunities', 'base']],
    ],
  },
];

const TONES = {
  base: 'text-slate-300',
  muted: 'text-slate-500',
  accent: 'text-primary font-semibold',
  ok: 'text-emerald-400',
};

const TYPE_SPEED = 45;
const AFTER_COMMAND = 250;
const AFTER_OUTPUT = 700;

function Prompt() {
  return (
    <span className="select-none">
      <span className="text-primary">nil@devops</span>
      <span className="text-slate-500">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-slate-500">$ </span>
    </span>
  );
}

function Terminal({ className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  // step: index of the command being typed; typed: chars typed of that command;
  // shownOutput: whether the current step's output is visible
  const [state, setState] = useState({ step: 0, typed: 0, shownOutput: false });

  useEffect(() => {
    if (prefersReducedMotion) {
      setState({ step: SESSION.length, typed: 0, shownOutput: false });
      return;
    }

    const { step, typed, shownOutput } = state;
    if (step >= SESSION.length) return;

    const command = SESSION[step].command;
    let timer;
    if (typed < command.length) {
      timer = setTimeout(() => setState({ step, typed: typed + 1, shownOutput }), TYPE_SPEED);
    } else if (!shownOutput) {
      timer = setTimeout(() => setState({ step, typed, shownOutput: true }), AFTER_COMMAND);
    } else {
      timer = setTimeout(() => setState({ step: step + 1, typed: 0, shownOutput: false }), AFTER_OUTPUT);
    }
    return () => clearTimeout(timer);
  }, [state, prefersReducedMotion]);

  const { step, typed, shownOutput } = state;
  const done = step >= SESSION.length;

  return (
    <div
      className={`rounded-xl border border-slate-700/80 bg-slate-950/90 shadow-2xl shadow-primary/10 backdrop-blur overflow-hidden ${className}`}
      role="img"
      aria-label="Terminal showing Nil Nguyen's DevOps skills: Terraform, Kubernetes, Istio Gateway, CI/CD and observability, plus status: open to new opportunities"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs font-mono text-slate-500">nil@devops: ~</span>
      </div>

      {/* Body */}
      <div aria-hidden="true" className="p-4 sm:p-5 font-mono text-[11px] sm:text-[13px] leading-relaxed min-h-[300px] sm:min-h-[340px] whitespace-pre overflow-x-auto">
        {SESSION.map((item, i) => {
          if (i > step) return null;
          const isCurrent = i === step;
          const text = isCurrent ? item.command.slice(0, typed) : item.command;
          const showOutput = !isCurrent || shownOutput;
          return (
            <div key={item.command} className="mb-2">
              <div>
                <Prompt />
                <span className="text-slate-100">{text}</span>
                {isCurrent && !shownOutput && <span className="terminal-cursor" />}
              </div>
              {showOutput &&
                item.output.map((line, j) => (
                  <div key={j}>
                    {line.map(([segment, tone], k) => (
                      <span key={k} className={TONES[tone]}>{segment}</span>
                    ))}
                  </div>
                ))}
            </div>
          );
        })}
        {done && (
          <div>
            <Prompt />
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
